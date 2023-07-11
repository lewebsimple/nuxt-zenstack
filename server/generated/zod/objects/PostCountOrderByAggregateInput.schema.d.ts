import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostCountOrderByAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostCountOrderByAggregateInput, "zenstack_transaction" | "zenstack_guard">
>;
