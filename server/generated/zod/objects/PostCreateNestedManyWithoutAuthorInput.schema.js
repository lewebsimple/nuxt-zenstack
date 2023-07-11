"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutAuthorInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PostCreateWithoutAuthorInput_schema_1 = require("./PostCreateWithoutAuthorInput.schema");
const PostUncheckedCreateWithoutAuthorInput_schema_1 = require("./PostUncheckedCreateWithoutAuthorInput.schema");
const PostCreateOrConnectWithoutAuthorInput_schema_1 = require("./PostCreateOrConnectWithoutAuthorInput.schema");
const PostWhereUniqueInput_schema_1 = require("./PostWhereUniqueInput.schema");
exports.PostCreateNestedManyWithoutAuthorInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PostCreateWithoutAuthorInput_schema_1.PostCreateWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => PostCreateWithoutAuthorInput_schema_1.PostCreateWithoutAuthorInputObjectSchema).array(),
        zod_1.z.lazy(() => PostUncheckedCreateWithoutAuthorInput_schema_1.PostUncheckedCreateWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => PostUncheckedCreateWithoutAuthorInput_schema_1.PostUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PostCreateOrConnectWithoutAuthorInput_schema_1.PostCreateOrConnectWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => PostCreateOrConnectWithoutAuthorInput_schema_1.PostCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PostWhereUniqueInput_schema_1.PostWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PostWhereUniqueInput_schema_1.PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
