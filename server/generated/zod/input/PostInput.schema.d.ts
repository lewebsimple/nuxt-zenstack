import type { Prisma } from "@prisma/client";
import { type z } from "zod";

declare type PostInputSchemaType = {
  findUnique: z.ZodType<Prisma.PostFindUniqueArgs>;
  findFirst: z.ZodType<Prisma.PostFindFirstArgs>;
  findMany: z.ZodType<Prisma.PostFindManyArgs>;
  create: z.ZodType<Prisma.PostCreateArgs>;
  delete: z.ZodType<Prisma.PostDeleteArgs>;
  deleteMany: z.ZodType<Prisma.PostDeleteManyArgs>;
  update: z.ZodType<Prisma.PostUpdateArgs>;
  updateMany: z.ZodType<Prisma.PostUpdateManyArgs>;
  upsert: z.ZodType<Prisma.PostUpsertArgs>;
  aggregate: z.ZodType<Prisma.PostAggregateArgs>;
  groupBy: z.ZodType<Prisma.PostGroupByArgs>;
};
export declare const PostInputSchema: PostInputSchemaType;
export {};
