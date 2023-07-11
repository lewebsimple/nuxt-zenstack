import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const StringNullableFilterObjectSchema: z.ZodType<
  Omit<Prisma.StringNullableFilter, "zenstack_transaction" | "zenstack_guard">
>;
