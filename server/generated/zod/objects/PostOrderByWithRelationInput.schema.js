"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UserOrderByWithRelationInput_schema_1 = require("./UserOrderByWithRelationInput.schema");
exports.PostOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), title: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), content: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), published: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), author: zod_1.z.lazy(() => UserOrderByWithRelationInput_schema_1.UserOrderByWithRelationInputObjectSchema).optional(), authorId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
