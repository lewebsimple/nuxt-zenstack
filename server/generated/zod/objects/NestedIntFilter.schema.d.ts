import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedIntFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedIntFilter, "zenstack_transaction" | "zenstack_guard">
>;
