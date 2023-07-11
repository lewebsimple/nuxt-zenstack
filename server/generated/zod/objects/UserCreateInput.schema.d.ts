import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserCreateInputObjectSchema: z.ZodType<
  Omit<Prisma.UserCreateInput, "zenstack_transaction" | "zenstack_guard">
>;
