import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUpdateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUpdateInput, "zenstack_transaction" | "zenstack_guard">
>;
