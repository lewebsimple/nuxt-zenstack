"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutPostsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateWithoutPostsInput_schema_1 = require("./UserCreateWithoutPostsInput.schema");
const UserUncheckedCreateWithoutPostsInput_schema_1 = require("./UserUncheckedCreateWithoutPostsInput.schema");
const UserCreateOrConnectWithoutPostsInput_schema_1 = require("./UserCreateOrConnectWithoutPostsInput.schema");
const UserUpsertWithoutPostsInput_schema_1 = require("./UserUpsertWithoutPostsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserUpdateWithoutPostsInput_schema_1 = require("./UserUpdateWithoutPostsInput.schema");
const UserUncheckedUpdateWithoutPostsInput_schema_1 = require("./UserUncheckedUpdateWithoutPostsInput.schema");
exports.UserUpdateOneWithoutPostsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutPostsInput_schema_1.UserCreateWithoutPostsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutPostsInput_schema_1.UserUncheckedCreateWithoutPostsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => UserCreateOrConnectWithoutPostsInput_schema_1.UserCreateOrConnectWithoutPostsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => UserUpsertWithoutPostsInput_schema_1.UserUpsertWithoutPostsInputObjectSchema).optional(), disconnect: zod_1.z.boolean().optional(), delete: zod_1.z.boolean().optional(), connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutPostsInput_schema_1.UserUpdateWithoutPostsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutPostsInput_schema_1.UserUncheckedUpdateWithoutPostsInputObjectSchema)]).optional()
}).strict();
