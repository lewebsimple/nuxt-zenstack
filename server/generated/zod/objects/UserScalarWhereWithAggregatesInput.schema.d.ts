import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<
  Omit<Prisma.UserScalarWhereWithAggregatesInput, "zenstack_transaction" | "zenstack_guard">
>;
