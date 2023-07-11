import { type inferAsyncReturnType, initTRPC } from "@trpc/server";
import { type H3Event } from "h3";

import { type AuthState } from "~/server/utils/auth";

export const createContext = (event: H3Event) => ({
  prisma: getExtendedPrisma(event),
  auth: event.context.auth as AuthState,
});
export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;
