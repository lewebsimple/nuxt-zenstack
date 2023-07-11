import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserMinOrderByAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserMinOrderByAggregateInput, "zenstack_transaction" | "zenstack_guard">
>;
