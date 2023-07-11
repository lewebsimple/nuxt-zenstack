import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostMaxAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostMaxAggregateInputType, "zenstack_transaction" | "zenstack_guard">
>;
