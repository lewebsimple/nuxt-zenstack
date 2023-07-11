import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const StringFilterObjectSchema: z.ZodType<
  Omit<Prisma.StringFilter, "zenstack_transaction" | "zenstack_guard">
>;
