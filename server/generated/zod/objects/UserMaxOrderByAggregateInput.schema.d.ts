import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserMaxOrderByAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserMaxOrderByAggregateInput, "zenstack_transaction" | "zenstack_guard">
>;
