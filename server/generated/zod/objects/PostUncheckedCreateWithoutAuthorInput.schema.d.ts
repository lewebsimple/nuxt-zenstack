import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUncheckedCreateWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUncheckedCreateWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
