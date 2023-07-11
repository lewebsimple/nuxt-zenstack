import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserCountOrderByAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserCountOrderByAggregateInput, "zenstack_transaction" | "zenstack_guard">
>;
