"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedUpdateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const PostUncheckedUpdateManyWithoutAuthorNestedInput_schema_1 = require("./PostUncheckedUpdateManyWithoutAuthorNestedInput.schema");
exports.UserUncheckedUpdateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), email: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), password: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), posts: zod_1.z.lazy(() => PostUncheckedUpdateManyWithoutAuthorNestedInput_schema_1.PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional()
}).strict();
