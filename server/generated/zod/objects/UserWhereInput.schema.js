"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const PostListRelationFilter_schema_1 = require("./PostListRelationFilter.schema");
exports.UserWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.UserWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UserWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.UserWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.UserWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UserWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), email: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), password: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), posts: zod_1.z.lazy(() => PostListRelationFilter_schema_1.PostListRelationFilterObjectSchema).optional()
}).strict();
