/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.';
import { PostInputSchema } from '../../zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(
    router: RouterFactory<Config>,
    procedure: ProcBuilder<Config>,
) {
    return router({
        aggregate: procedure
            .input(PostInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).post.aggregate(input as any))),

        create: procedure
            .input(PostInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.create(input as any))),

        deleteMany: procedure
            .input(PostInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.deleteMany(input as any))),

        delete: procedure
            .input(PostInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.delete(input as any))),

        findFirst: procedure
            .input(PostInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input(PostInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findFirstOrThrow(input as any))),

        findMany: procedure
            .input(PostInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findMany(input as any))),

        findUnique: procedure
            .input(PostInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input(PostInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input(PostInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).post.groupBy(input as any))),

        updateMany: procedure
            .input(PostInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.updateMany(input as any))),

        update: procedure
            .input(PostInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.update(input as any))),

        upsert: procedure
            .input(PostInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.upsert(input as any))),
    });
}
