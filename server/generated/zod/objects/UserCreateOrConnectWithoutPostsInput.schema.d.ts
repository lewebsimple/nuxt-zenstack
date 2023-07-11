import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserCreateOrConnectWithoutPostsInputObjectSchema: z.ZodType<
  Omit<Prisma.UserCreateOrConnectWithoutPostsInput, "zenstack_transaction" | "zenstack_guard">
>;
