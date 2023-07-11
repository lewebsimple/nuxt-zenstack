"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCountOutputTypeSelect_schema_1 = require("./UserCountOutputTypeSelect.schema");
exports.UserCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => UserCountOutputTypeSelect_schema_1.UserCountOutputTypeSelectObjectSchema).optional()
}).strict();
