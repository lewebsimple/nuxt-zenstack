import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUncheckedCreateWithoutPostsInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUncheckedCreateWithoutPostsInput, "zenstack_transaction" | "zenstack_guard">
>;
