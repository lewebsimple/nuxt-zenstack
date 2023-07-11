import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostOrderByWithRelationInputObjectSchema: z.ZodType<
  Omit<Prisma.PostOrderByWithRelationInput, "zenstack_transaction" | "zenstack_guard">
>;
