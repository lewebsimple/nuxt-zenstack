import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostWhereInputObjectSchema: z.ZodType<
  Omit<Prisma.PostWhereInput, "zenstack_transaction" | "zenstack_guard">
>;
