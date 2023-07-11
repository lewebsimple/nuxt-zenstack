"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PostWhereInput_schema_1 = require("./PostWhereInput.schema");
exports.PostListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => PostWhereInput_schema_1.PostWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => PostWhereInput_schema_1.PostWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => PostWhereInput_schema_1.PostWhereInputObjectSchema).optional()
}).strict();
