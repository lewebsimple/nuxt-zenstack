import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUncheckedUpdateManyWithoutPostsInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUncheckedUpdateManyWithoutPostsInput, "zenstack_transaction" | "zenstack_guard">
>;
