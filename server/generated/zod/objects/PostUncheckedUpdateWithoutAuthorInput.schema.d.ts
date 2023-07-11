import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUncheckedUpdateWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUncheckedUpdateWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
