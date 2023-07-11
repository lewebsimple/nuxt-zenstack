import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostSelectObjectSchema: z.ZodType<
  Omit<Prisma.PostSelect, "zenstack_transaction" | "zenstack_guard">
>;
