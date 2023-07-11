import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const StringNullableWithAggregatesFilterObjectSchema: z.ZodType<
  Omit<Prisma.StringNullableWithAggregatesFilter, "zenstack_transaction" | "zenstack_guard">
>;
