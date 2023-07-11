import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const StringFieldUpdateOperationsInputObjectSchema: z.ZodType<
  Omit<Prisma.StringFieldUpdateOperationsInput, "zenstack_transaction" | "zenstack_guard">
>;
