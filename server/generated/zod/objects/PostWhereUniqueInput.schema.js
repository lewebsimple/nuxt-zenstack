"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PostWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional()
}).strict();
