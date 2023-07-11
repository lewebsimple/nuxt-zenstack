import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedDateTimeFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedDateTimeFilter, "zenstack_transaction" | "zenstack_guard">
>;
