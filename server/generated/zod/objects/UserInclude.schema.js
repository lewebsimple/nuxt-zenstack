"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PostInput_schema_1 = require("../input/PostInput.schema");
const UserCountOutputTypeArgs_schema_1 = require("./UserCountOutputTypeArgs.schema");
exports.UserIncludeObjectSchema = zod_1.z.object({
    posts: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PostInput_schema_1.PostInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => UserCountOutputTypeArgs_schema_1.UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
