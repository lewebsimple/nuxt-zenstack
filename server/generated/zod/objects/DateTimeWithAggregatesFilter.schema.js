"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeWithAggregatesFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const NestedDateTimeWithAggregatesFilter_schema_1 = require("./NestedDateTimeWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedDateTimeFilter_schema_1 = require("./NestedDateTimeFilter.schema");
exports.DateTimeWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), in: zod_1.z.union([zod_1.z.date().array().optional(), zod_1.z.string().datetime().array().optional()]), notIn: zod_1.z.union([zod_1.z.date().array().optional(), zod_1.z.string().datetime().array().optional()]), lt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), lte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), gt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), gte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), not: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NestedDateTimeWithAggregatesFilter_schema_1.NestedDateTimeWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedDateTimeFilter_schema_1.NestedDateTimeFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedDateTimeFilter_schema_1.NestedDateTimeFilterObjectSchema).optional()
}).strict();
