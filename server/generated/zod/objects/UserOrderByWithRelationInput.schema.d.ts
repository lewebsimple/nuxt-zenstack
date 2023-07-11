import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserOrderByWithRelationInputObjectSchema: z.ZodType<
  Omit<Prisma.UserOrderByWithRelationInput, "zenstack_transaction" | "zenstack_guard">
>;
