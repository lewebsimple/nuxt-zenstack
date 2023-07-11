import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostWhereUniqueInputObjectSchema: z.ZodType<
  Omit<Prisma.PostWhereUniqueInput, "zenstack_transaction" | "zenstack_guard">
>;
