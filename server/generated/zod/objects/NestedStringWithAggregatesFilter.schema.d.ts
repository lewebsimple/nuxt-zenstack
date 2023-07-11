import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedStringWithAggregatesFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedStringWithAggregatesFilter, "zenstack_transaction" | "zenstack_guard">
>;
