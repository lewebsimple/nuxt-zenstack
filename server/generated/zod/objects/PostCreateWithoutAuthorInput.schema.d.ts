import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostCreateWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostCreateWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
