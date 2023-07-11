import { createNuxtApiHandler } from "trpc-nuxt";
import { z } from "zod";

import { createRouter as createCRUDRouter } from "~/server/generated/trpc/routers";
import { createContext, procedure, router } from "~/server/trpc/trpc";

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
  crud: createCRUDRouter(router, procedure),
});

export type AppRouter = typeof appRouter;

export default createNuxtApiHandler({
  router: appRouter,
  createContext,
});
