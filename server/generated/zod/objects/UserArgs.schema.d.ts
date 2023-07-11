import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserArgsObjectSchema: z.ZodType<Omit<Prisma.UserArgs, "zenstack_transaction" | "zenstack_guard">>;
