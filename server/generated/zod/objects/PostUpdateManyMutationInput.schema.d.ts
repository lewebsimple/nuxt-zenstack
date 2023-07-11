import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUpdateManyMutationInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUpdateManyMutationInput, "zenstack_transaction" | "zenstack_guard">
>;
