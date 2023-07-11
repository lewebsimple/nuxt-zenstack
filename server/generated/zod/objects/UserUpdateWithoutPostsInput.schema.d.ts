import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUpdateWithoutPostsInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUpdateWithoutPostsInput, "zenstack_transaction" | "zenstack_guard">
>;
