import { type inferAsyncReturnType, initTRPC } from "@trpc/server";
import { type H3Event } from "h3";

export const createContext = (event: H3Event) => ({ prisma: getExtendedPrisma(event) });
export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const procedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;
