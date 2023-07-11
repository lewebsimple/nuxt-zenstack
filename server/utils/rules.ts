import { rule } from "trpc-shield";

import { type Context } from "./trpc";

export { allow, and, chain, deny, not, or, race } from "trpc-shield";

export const isAuthenticated = rule<Context>()((ctx) => !!ctx.auth.user);
