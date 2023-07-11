import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostListRelationFilterObjectSchema: z.ZodType<
  Omit<Prisma.PostListRelationFilter, "zenstack_transaction" | "zenstack_guard">
>;
