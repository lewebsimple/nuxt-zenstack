import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUpdateWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUpdateWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
