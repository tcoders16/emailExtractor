import express from 'express';
import router from './routes';
import cron from 'node-cron';
import { fetchAndLogSentEmails } from './services/emailService';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

cron.schedule('*/5 * * * *', async () => {
  console.log('⏰ Checking sent emails...');
  await fetchAndLogSentEmails();
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
