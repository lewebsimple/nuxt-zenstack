import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUpdateManyWithoutAuthorNestedInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUpdateManyWithoutAuthorNestedInput, "zenstack_transaction" | "zenstack_guard">
>;
