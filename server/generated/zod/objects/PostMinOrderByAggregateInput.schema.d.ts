import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostMinOrderByAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostMinOrderByAggregateInput, "zenstack_transaction" | "zenstack_guard">
>;
