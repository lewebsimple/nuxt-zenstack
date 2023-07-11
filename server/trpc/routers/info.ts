import { version } from "~/package.json";

import { publicProcedure, router } from "../trpc";

export const info = router({
  version: publicProcedure.query(() => `v${version}`),
});
