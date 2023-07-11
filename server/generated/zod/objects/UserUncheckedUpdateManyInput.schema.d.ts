import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUncheckedUpdateManyInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUncheckedUpdateManyInput, "zenstack_transaction" | "zenstack_guard">
>;
