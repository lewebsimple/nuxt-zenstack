"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableStringFieldUpdateOperationsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.NullableStringFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.string().optional().nullable()
}).strict();
