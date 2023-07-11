"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringNullableWithAggregatesFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const NestedStringNullableWithAggregatesFilter_schema_1 = require("./NestedStringNullableWithAggregatesFilter.schema");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedStringNullableFilter_schema_1 = require("./NestedStringNullableFilter.schema");
exports.StringNullableWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(), in: zod_1.z.string().array().optional().nullable(), notIn: zod_1.z.string().array().optional().nullable(), lt: zod_1.z.string().optional(), lte: zod_1.z.string().optional(), gt: zod_1.z.string().optional(), gte: zod_1.z.string().optional(), contains: zod_1.z.string().optional(), startsWith: zod_1.z.string().optional(), endsWith: zod_1.z.string().optional(), not: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NestedStringNullableWithAggregatesFilter_schema_1.NestedStringNullableWithAggregatesFilterObjectSchema)]).optional().nullable(), _count: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedStringNullableFilter_schema_1.NestedStringNullableFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedStringNullableFilter_schema_1.NestedStringNullableFilterObjectSchema).optional()
}).strict();
