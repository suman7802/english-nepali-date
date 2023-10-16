"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
const controller_1 = require("../controllers/controller");
userRouter.get('/english', controller_1.controller.english);
userRouter.get('/nepali', controller_1.controller.nepali);
