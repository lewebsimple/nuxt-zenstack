"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionIsolationLevelSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.TransactionIsolationLevelSchema = zod_1.z.enum(["Serializable"]);
