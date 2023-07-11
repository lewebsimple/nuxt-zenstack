import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedStringNullableFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedStringNullableFilter, "zenstack_transaction" | "zenstack_guard">
>;
