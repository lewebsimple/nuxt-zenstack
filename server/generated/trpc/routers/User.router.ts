/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.';
import { UserInputSchema } from '../../zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(
    router: RouterFactory<Config>,
    procedure: ProcBuilder<Config>,
) {
    return router({
        aggregate: procedure
            .input(UserInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).user.aggregate(input as any))),

        create: procedure
            .input(UserInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.create(input as any))),

        deleteMany: procedure
            .input(UserInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.deleteMany(input as any))),

        delete: procedure
            .input(UserInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.delete(input as any))),

        findFirst: procedure
            .input(UserInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input(UserInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findFirstOrThrow(input as any))),

        findMany: procedure
            .input(UserInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findMany(input as any))),

        findUnique: procedure
            .input(UserInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input(UserInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input(UserInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).user.groupBy(input as any))),

        updateMany: procedure
            .input(UserInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.updateMany(input as any))),

        update: procedure
            .input(UserInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.update(input as any))),

        upsert: procedure
            .input(UserInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.upsert(input as any))),
    });
}
