import type { Prisma } from "@prisma/client";
import { type z } from "zod";

export declare const PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<
  Omit<Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput, "zenstack_transaction" | "zenstack_guard">
>;
