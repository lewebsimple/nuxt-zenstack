import { createTRPCNuxtClient, httpBatchLink } from "trpc-nuxt/client";

import type { AppRouter } from "~/server/api/trpc/[trpc]";

export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders();
  const trpc = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        headers: () => headers,
        url: "/api/trpc",
      }),
    ],
  });
  return { provide: { trpc } };
});
