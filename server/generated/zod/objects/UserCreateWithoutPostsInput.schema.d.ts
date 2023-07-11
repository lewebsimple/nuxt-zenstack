import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserCreateWithoutPostsInputObjectSchema: z.ZodType<
  Omit<Prisma.UserCreateWithoutPostsInput, "zenstack_transaction" | "zenstack_guard">
>;
