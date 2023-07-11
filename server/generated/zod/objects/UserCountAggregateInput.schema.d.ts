import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserCountAggregateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserCountAggregateInputType, "zenstack_transaction" | "zenstack_guard">
>;
