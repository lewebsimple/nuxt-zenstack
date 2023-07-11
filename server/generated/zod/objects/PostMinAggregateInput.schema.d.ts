import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostMinAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostMinAggregateInputType, "zenstack_transaction" | "zenstack_guard">
>;
