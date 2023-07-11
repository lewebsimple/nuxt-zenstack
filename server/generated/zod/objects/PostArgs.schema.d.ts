import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostArgsObjectSchema: z.ZodType<Omit<Prisma.PostArgs, "zenstack_transaction" | "zenstack_guard">>;
