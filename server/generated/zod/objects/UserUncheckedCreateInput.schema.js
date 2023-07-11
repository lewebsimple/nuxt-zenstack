"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PostUncheckedCreateNestedManyWithoutAuthorInput_schema_1 = require("./PostUncheckedCreateNestedManyWithoutAuthorInput.schema");
exports.UserUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), email: zod_1.z.string(), password: zod_1.z.string(), posts: zod_1.z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInput_schema_1.PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional()
}).strict();
