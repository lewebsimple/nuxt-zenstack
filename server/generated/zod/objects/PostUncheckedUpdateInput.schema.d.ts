import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUncheckedUpdateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUncheckedUpdateInput, "zenstack_transaction" | "zenstack_guard">
>;
