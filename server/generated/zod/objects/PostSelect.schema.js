"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserArgs_schema_1 = require("./UserArgs.schema");
exports.PostSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), createdAt: zod_1.z.boolean().optional(), updatedAt: zod_1.z.boolean().optional(), title: zod_1.z.boolean().optional(), content: zod_1.z.boolean().optional(), published: zod_1.z.boolean().optional(), author: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => UserArgs_schema_1.UserArgsObjectSchema)]).optional(), authorId: zod_1.z.boolean().optional()
}).strict();
