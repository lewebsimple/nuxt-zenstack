import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const BoolWithAggregatesFilterObjectSchema: z.ZodType<
  Omit<Prisma.BoolWithAggregatesFilter, "zenstack_transaction" | "zenstack_guard">
>;
