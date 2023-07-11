"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFieldUpdateOperationsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.DateTimeFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()])
}).strict();
