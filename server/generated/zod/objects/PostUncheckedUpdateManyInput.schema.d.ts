import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUncheckedUpdateManyInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUncheckedUpdateManyInput, "zenstack_transaction" | "zenstack_guard">
>;
