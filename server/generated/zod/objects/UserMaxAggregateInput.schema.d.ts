import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserMaxAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserMaxAggregateInputType, "zenstack_transaction" | "zenstack_guard">
>;
