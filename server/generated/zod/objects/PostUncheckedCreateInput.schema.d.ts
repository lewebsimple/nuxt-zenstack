import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUncheckedCreateInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUncheckedCreateInput, "zenstack_transaction" | "zenstack_guard">
>;
