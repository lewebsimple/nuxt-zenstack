import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedIntNullableFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedIntNullableFilter, "zenstack_transaction" | "zenstack_guard">
>;
