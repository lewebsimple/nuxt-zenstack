import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserOrderByWithAggregationInputObjectSchema: z.ZodType<
  Omit<Prisma.UserOrderByWithAggregationInput, "zenstack_transaction" | "zenstack_guard">
>;
