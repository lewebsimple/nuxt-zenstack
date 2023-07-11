import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const NullableStringFieldUpdateOperationsInputObjectSchema: z.ZodType<
  Omit<Prisma.NullableStringFieldUpdateOperationsInput, "zenstack_transaction" | "zenstack_guard">
>;
