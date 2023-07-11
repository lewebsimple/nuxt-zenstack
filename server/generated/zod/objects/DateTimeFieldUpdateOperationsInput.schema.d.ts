import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const DateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<
  Omit<Prisma.DateTimeFieldUpdateOperationsInput, "zenstack_transaction" | "zenstack_guard">
>;
