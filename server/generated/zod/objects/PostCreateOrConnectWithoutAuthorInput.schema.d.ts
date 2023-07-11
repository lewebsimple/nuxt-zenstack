import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostCreateOrConnectWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostCreateOrConnectWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
