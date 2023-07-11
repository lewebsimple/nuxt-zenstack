"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.UserCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), email: zod_1.z.literal(true).optional(), password: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
