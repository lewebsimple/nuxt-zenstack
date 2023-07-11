import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUpsertWithoutPostsInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUpsertWithoutPostsInput, "zenstack_transaction" | "zenstack_guard">
>;
