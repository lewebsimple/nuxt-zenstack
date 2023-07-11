import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const UserRelationFilterObjectSchema: z.ZodType<
  Omit<Prisma.UserRelationFilter, "zenstack_transaction" | "zenstack_guard">
>;
