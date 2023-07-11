"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const PostCountOrderByAggregateInput_schema_1 = require("./PostCountOrderByAggregateInput.schema");
const PostMaxOrderByAggregateInput_schema_1 = require("./PostMaxOrderByAggregateInput.schema");
const PostMinOrderByAggregateInput_schema_1 = require("./PostMinOrderByAggregateInput.schema");
exports.PostOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), title: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), content: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), published: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), authorId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => PostCountOrderByAggregateInput_schema_1.PostCountOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => PostMaxOrderByAggregateInput_schema_1.PostMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => PostMinOrderByAggregateInput_schema_1.PostMinOrderByAggregateInputObjectSchema).optional()
}).strict();
