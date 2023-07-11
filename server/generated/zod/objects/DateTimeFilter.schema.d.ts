import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const DateTimeFilterObjectSchema: z.ZodType<
  Omit<Prisma.DateTimeFilter, "zenstack_transaction" | "zenstack_guard">
>;
