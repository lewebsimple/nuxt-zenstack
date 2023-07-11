import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const BoolFieldUpdateOperationsInputObjectSchema: z.ZodType<
  Omit<Prisma.BoolFieldUpdateOperationsInput, "zenstack_transaction" | "zenstack_guard">
>;
