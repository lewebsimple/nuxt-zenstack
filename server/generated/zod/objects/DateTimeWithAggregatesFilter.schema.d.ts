import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const DateTimeWithAggregatesFilterObjectSchema: z.ZodType<
  Omit<Prisma.DateTimeWithAggregatesFilter, "zenstack_transaction" | "zenstack_guard">
>;
