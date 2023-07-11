"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.UserWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), email: zod_1.z.string().optional()
}).strict();
