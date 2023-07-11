import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUpdateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUpdateInput, "zenstack_transaction" | "zenstack_guard">
>;
