import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedDateTimeWithAggregatesFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedDateTimeWithAggregatesFilter, "zenstack_transaction" | "zenstack_guard">
>;
