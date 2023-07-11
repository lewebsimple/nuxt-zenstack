"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutPostsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.UserCreateWithoutPostsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), email: zod_1.z.string(), password: zod_1.z.string()
}).strict();
