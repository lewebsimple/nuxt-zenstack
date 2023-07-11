import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NestedStringFilterObjectSchema: z.ZodType<
  Omit<Prisma.NestedStringFilter, "zenstack_transaction" | "zenstack_guard">
>;
