import { version } from "~/package.json";

export const info = router({
  version: shieldProcedure.query(() => `v${version}`),
});
