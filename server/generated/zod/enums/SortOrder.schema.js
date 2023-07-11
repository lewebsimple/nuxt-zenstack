"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrderSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SortOrderSchema = zod_1.z.enum(["asc", "desc"]);
