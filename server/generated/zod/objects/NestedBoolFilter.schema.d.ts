import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedBoolFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedBoolFilter, "zenstack_transaction" | "zenstack_guard">
>;
