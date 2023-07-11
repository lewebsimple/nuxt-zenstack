"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountOutputTypeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.UserCountOutputTypeSelectObjectSchema = zod_1.z.object({
    posts: zod_1.z.boolean().optional()
}).strict();
