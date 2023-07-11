import { createNuxtApiHandler } from "trpc-nuxt";

import { createRouter as createCRUDRouter } from "~/server/generated/trpc/routers";
import * as routers from "~/server/trpc/_routers";

import { createContext, publicProcedure, router } from "../../utils/trpc";

export const appRouter = router({
  crud: createCRUDRouter(router, publicProcedure),
  ...routers,
});

export type AppRouter = typeof appRouter;

export default createNuxtApiHandler({
  router: appRouter,
  createContext,
});
