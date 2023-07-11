import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostCountAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostCountAggregateInputType, "zenstack_transaction" | "zenstack_guard">
>;
