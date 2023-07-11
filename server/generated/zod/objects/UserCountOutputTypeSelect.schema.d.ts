import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserCountOutputTypeSelectObjectSchema: z.ZodType<
  Omit<Prisma.UserCountOutputTypeSelect, "zenstack_transaction" | "zenstack_guard">
>;
