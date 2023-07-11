"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PostInput_schema_1 = require("../input/PostInput.schema");
const UserCountOutputTypeArgs_schema_1 = require("./UserCountOutputTypeArgs.schema");
exports.UserSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), email: zod_1.z.boolean().optional(), password: zod_1.z.boolean().optional(), posts: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PostInput_schema_1.PostInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => UserCountOutputTypeArgs_schema_1.UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
