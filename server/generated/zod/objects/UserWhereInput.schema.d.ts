import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserWhereInputObjectSchema: z.ZodType<
  Omit<Prisma.UserWhereInput, "zenstack_transaction" | "zenstack_guard">
>;
