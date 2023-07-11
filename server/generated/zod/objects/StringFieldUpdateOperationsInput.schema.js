"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFieldUpdateOperationsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.StringFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.string().optional()
}).strict();
