import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostMaxOrderByAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostMaxOrderByAggregateInput, "zenstack_transaction" | "zenstack_guard">
>;
