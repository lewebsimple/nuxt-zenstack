import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserUpdateOneWithoutPostsNestedInputObjectSchema: z.ZodType<
  Omit<Prisma.UserUpdateOneWithoutPostsNestedInput, "zenstack_transaction" | "zenstack_guard">
>;
