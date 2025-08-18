"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const index_1 = require("./../../../src/data/generated/prisma/index");
exports.db = new index_1.PrismaClient();
