import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserSelectObjectSchema: z.ZodType<
  Omit<Prisma.UserSelect, "zenstack_transaction" | "zenstack_guard">
>;
