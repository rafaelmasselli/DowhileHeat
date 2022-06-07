"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const nodemailer_email_adapter_1 = require("./adapters/nodemailer/nodemailer-email-adapter");
const PrismaFeedbackRepository_1 = require("./repositories/prisma/PrismaFeedbackRepository");
const submit_feedback_use_case_1 = require("./use-cases/submit-feedback-use-case");
const express_1 = __importDefault(require("express"));
exports.routes = express_1.default.Router();
exports.routes.post('/feedback', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbackRepository = new PrismaFeedbackRepository_1.PrismaFeedbackRepository();
    const nodemailerMailAdapter = new nodemailer_email_adapter_1.NodemailerMailAdapter();
    const submitFeedbackUseCase = new submit_feedback_use_case_1.SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter);
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    });
    return res.status(201).send();
});
