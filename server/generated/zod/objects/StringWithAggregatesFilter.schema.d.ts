import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const StringWithAggregatesFilterObjectSchema: z.ZodType<
  Omit<Prisma.StringWithAggregatesFilter, "zenstack_transaction" | "zenstack_guard">
>;
