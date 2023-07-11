"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMaxAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PostMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), title: zod_1.z.literal(true).optional(), content: zod_1.z.literal(true).optional(), published: zod_1.z.literal(true).optional(), authorId: zod_1.z.literal(true).optional()
}).strict();
