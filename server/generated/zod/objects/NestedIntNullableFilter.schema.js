"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntNullableFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.NestedIntNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.number().optional().nullable(), in: zod_1.z.number().array().optional().nullable(), notIn: zod_1.z.number().array().optional().nullable(), lt: zod_1.z.number().optional(), lte: zod_1.z.number().optional(), gt: zod_1.z.number().optional(), gte: zod_1.z.number().optional(), not: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => exports.NestedIntNullableFilterObjectSchema)]).optional().nullable()
}).strict();
