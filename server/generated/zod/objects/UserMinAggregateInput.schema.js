"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMinAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.UserMinAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), email: zod_1.z.literal(true).optional(), password: zod_1.z.literal(true).optional()
}).strict();
