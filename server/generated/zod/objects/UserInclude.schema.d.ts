import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserIncludeObjectSchema: z.ZodType<
  Omit<Prisma.UserInclude, "zenstack_transaction" | "zenstack_guard">
>;
