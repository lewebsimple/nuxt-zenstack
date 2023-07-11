import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const BoolFilterObjectSchema: z.ZodType<
  Omit<Prisma.BoolFilter, "zenstack_transaction" | "zenstack_guard">
>;
