import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedStringNullableWithAggregatesFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedStringNullableWithAggregatesFilter, "zenstack_transaction" | "zenstack_guard">
>;
