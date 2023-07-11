import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUncheckedCreateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUncheckedCreateInput, "zenstack_transaction" | "zenstack_guard">
>;
