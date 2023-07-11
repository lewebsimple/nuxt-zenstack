import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserCountOutputTypeArgsObjectSchema: z.ZodType<
  Omit<Prisma.UserCountOutputTypeArgs, "zenstack_transaction" | "zenstack_guard">
>;
