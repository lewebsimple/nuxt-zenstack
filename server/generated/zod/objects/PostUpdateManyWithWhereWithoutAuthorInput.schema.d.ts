import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUpdateManyWithWhereWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUpdateManyWithWhereWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
