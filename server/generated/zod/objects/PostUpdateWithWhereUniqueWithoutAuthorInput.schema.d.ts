import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
