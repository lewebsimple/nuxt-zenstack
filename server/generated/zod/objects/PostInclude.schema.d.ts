import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostIncludeObjectSchema: z.ZodType<
  Omit<Prisma.PostInclude, "zenstack_transaction" | "zenstack_guard">
>;
