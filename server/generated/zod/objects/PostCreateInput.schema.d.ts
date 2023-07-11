import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostCreateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostCreateInput, "zenstack_transaction" | "zenstack_guard">
>;
