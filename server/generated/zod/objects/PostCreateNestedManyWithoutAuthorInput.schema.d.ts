import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostCreateNestedManyWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostCreateNestedManyWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
