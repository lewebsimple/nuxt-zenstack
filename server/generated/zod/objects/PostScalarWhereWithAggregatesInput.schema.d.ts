import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostScalarWhereWithAggregatesInputObjectSchema: z.ZodType<
  Omit<Prisma.PostScalarWhereWithAggregatesInput, "zenstack_transaction" | "zenstack_guard">
>;
