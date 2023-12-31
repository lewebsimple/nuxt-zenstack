import { PrismaClient } from "@prisma/client";
import { withPresets } from "@zenstackhq/runtime";
import { type H3Event } from "h3";

import userPassword from "~/server/prisma/extensions/user-password";

import { type AuthState } from "./auth";

export const prisma = new PrismaClient().$extends(userPassword);
export type Prisma = typeof prisma;

export function getExtendedPrisma(event: H3Event) {
  return withPresets(prisma, { user: (event.context.auth as AuthState).user || undefined });
}
