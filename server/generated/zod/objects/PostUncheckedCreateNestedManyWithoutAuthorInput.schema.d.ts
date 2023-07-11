import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
