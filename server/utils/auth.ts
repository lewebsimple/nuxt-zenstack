import { type H3Event } from "h3";
import * as jwt from "jsonwebtoken";
import { z } from "zod";

import { UserSchema } from "../generated/zod/models";

export const AuthStateSchema = z.object({ user: UserSchema.nullable() });
export type AuthState = z.infer<typeof AuthStateSchema>;

const authCookiename = process.env.NUXT_AUTH_COOKIE_NAME || "auth";
const authJwtSecret = process.env.NUXT_AUTH_JWT_SECRET || "changeme";

export function getAuthState(event: H3Event): AuthState {
  try {
    const token = getCookie(event, authCookiename);
    if (!token) throw new Error("AUTH_MISSING_JWT_TOKEN");
    return AuthStateSchema.parse(jwt.verify(token, authJwtSecret));
  } catch (error) {
    return { user: null };
  }
}

export function setAuthState(event: H3Event, auth: AuthState) {
  const token = jwt.sign(auth, authJwtSecret);
  setCookie(event, authCookiename, token, { httpOnly: true, sameSite: true, maxAge: 24 * 60 * 60 });
}
