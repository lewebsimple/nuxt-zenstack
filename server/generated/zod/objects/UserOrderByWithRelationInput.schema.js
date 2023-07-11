"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const PostOrderByRelationAggregateInput_schema_1 = require("./PostOrderByRelationAggregateInput.schema");
exports.UserOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), password: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), posts: zod_1.z.lazy(() => PostOrderByRelationAggregateInput_schema_1.PostOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
