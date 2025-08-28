"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const node_cron_1 = __importDefault(require("node-cron"));
const emailService_1 = require("./services/emailService");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api', routes_1.default);
node_cron_1.default.schedule('*/5 * * * *', async () => {
    console.log('⏰ Checking sent emails...');
    await (0, emailService_1.fetchAndLogSentEmails)();
});
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
