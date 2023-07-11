"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPostsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserUpdateWithoutPostsInput_schema_1 = require("./UserUpdateWithoutPostsInput.schema");
const UserUncheckedUpdateWithoutPostsInput_schema_1 = require("./UserUncheckedUpdateWithoutPostsInput.schema");
const UserCreateWithoutPostsInput_schema_1 = require("./UserCreateWithoutPostsInput.schema");
const UserUncheckedCreateWithoutPostsInput_schema_1 = require("./UserUncheckedCreateWithoutPostsInput.schema");
exports.UserUpsertWithoutPostsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutPostsInput_schema_1.UserUpdateWithoutPostsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutPostsInput_schema_1.UserUncheckedUpdateWithoutPostsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutPostsInput_schema_1.UserCreateWithoutPostsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutPostsInput_schema_1.UserUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
