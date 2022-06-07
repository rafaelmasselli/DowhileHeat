"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'ea129c7580a78f',
        pass: '86bcf8a203e136'
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe feedget <oi@feedget.com>',
            to: 'Rafael masselli <rafaelmasselli0@gmail.com>',
            subject,
            html: body
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
