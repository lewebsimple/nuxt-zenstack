import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostOrderByWithAggregationInputObjectSchema: z.ZodType<
  Omit<Prisma.PostOrderByWithAggregationInput, "zenstack_transaction" | "zenstack_guard">
>;
