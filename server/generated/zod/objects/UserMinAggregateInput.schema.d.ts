import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserMinAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserMinAggregateInputType, "zenstack_transaction" | "zenstack_guard">
>;
