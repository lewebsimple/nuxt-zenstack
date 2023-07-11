import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedBoolWithAggregatesFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedBoolWithAggregatesFilter, "zenstack_transaction" | "zenstack_guard">
>;
