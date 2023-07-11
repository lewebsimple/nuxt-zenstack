import { createNuxtApiHandler } from "trpc-nuxt";

import { createRouter as createCRUDRouter } from "~/server/generated/trpc/routers";
import { createContext, publicProcedure, router } from "~/server/trpc/trpc";

export const appRouter = router({
  crud: createCRUDRouter(router, publicProcedure),
});

export type AppRouter = typeof appRouter;

export default createNuxtApiHandler({
  router: appRouter,
  createContext,
});
