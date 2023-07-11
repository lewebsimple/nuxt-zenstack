import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUncheckedUpdateWithoutPostsInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUncheckedUpdateWithoutPostsInput, "zenstack_transaction" | "zenstack_guard">
>;
