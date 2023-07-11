"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PostCreateNestedManyWithoutAuthorInput_schema_1 = require("./PostCreateNestedManyWithoutAuthorInput.schema");
exports.UserCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), email: zod_1.z.string(), password: zod_1.z.string(), posts: zod_1.z.lazy(() => PostCreateNestedManyWithoutAuthorInput_schema_1.PostCreateNestedManyWithoutAuthorInputObjectSchema).optional()
}).strict();
