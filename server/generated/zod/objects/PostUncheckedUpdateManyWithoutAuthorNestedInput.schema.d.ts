import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUncheckedUpdateManyWithoutAuthorNestedInput, "zenstack_transaction" | "zenstack_guard">
>;
