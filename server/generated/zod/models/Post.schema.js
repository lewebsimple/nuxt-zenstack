"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateSchema = exports.PostCreateSchema = exports.PostSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    title: zod_1.z.string().min(1).max(256),
    content: zod_1.z.string(),
    published: zod_1.z.boolean(),
});
exports.PostSchema = baseSchema;
exports.PostCreateSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true, published: true,
});
exports.PostUpdateSchema = baseSchema.partial();
