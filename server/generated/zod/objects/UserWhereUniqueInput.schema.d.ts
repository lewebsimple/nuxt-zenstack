import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserWhereUniqueInputObjectSchema: z.ZodType<
  Omit<Prisma.UserWhereUniqueInput, "zenstack_transaction" | "zenstack_guard">
>;
