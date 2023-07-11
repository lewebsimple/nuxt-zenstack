"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PostWhereUniqueInput_schema_1 = require("./PostWhereUniqueInput.schema");
const PostUpdateWithoutAuthorInput_schema_1 = require("./PostUpdateWithoutAuthorInput.schema");
const PostUncheckedUpdateWithoutAuthorInput_schema_1 = require("./PostUncheckedUpdateWithoutAuthorInput.schema");
const PostCreateWithoutAuthorInput_schema_1 = require("./PostCreateWithoutAuthorInput.schema");
const PostUncheckedCreateWithoutAuthorInput_schema_1 = require("./PostUncheckedCreateWithoutAuthorInput.schema");
exports.PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PostWhereUniqueInput_schema_1.PostWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => PostUpdateWithoutAuthorInput_schema_1.PostUpdateWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => PostUncheckedUpdateWithoutAuthorInput_schema_1.PostUncheckedUpdateWithoutAuthorInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => PostCreateWithoutAuthorInput_schema_1.PostCreateWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => PostUncheckedCreateWithoutAuthorInput_schema_1.PostUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
