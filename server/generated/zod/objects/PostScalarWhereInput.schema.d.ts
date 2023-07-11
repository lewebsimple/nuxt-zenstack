import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostScalarWhereInputObjectSchema: z.ZodType<
  Omit<Prisma.PostScalarWhereInput, "zenstack_transaction" | "zenstack_guard">
>;
