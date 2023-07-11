import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUpdateManyMutationInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUpdateManyMutationInput, "zenstack_transaction" | "zenstack_guard">
>;
