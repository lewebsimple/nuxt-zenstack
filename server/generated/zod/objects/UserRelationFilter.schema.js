"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
exports.UserRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional().nullable(), isNot: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional().nullable()
}).strict();
