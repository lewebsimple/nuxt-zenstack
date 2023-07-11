import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUncheckedUpdateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUncheckedUpdateInput, "zenstack_transaction" | "zenstack_guard">
>;
