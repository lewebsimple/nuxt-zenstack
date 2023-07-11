import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserCreateNestedOneWithoutPostsInputObjectSchema: z.ZodType<
  Omit<Prisma.UserCreateNestedOneWithoutPostsInput, "zenstack_transaction" | "zenstack_guard">
>;
