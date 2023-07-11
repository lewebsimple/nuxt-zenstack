"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const UserRelationFilter_schema_1 = require("./UserRelationFilter.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
exports.PostWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.PostWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.PostWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.PostWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.PostWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.PostWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), title: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), content: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), published: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), author: zod_1.z.union([zod_1.z.lazy(() => UserRelationFilter_schema_1.UserRelationFilterObjectSchema),
        zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema)]).optional().nullable(), authorId: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string()]).optional().nullable()
}).strict();
