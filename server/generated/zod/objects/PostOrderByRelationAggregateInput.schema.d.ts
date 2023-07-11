import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostOrderByRelationAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostOrderByRelationAggregateInput, "zenstack_transaction" | "zenstack_guard">
>;
