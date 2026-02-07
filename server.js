import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';
import fs from 'fs/promises';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8080;

const intakeSchema = z.object({
  goal: z.string().min(1, 'Goal is required.'),
  revenue: z.string().min(1, 'Revenue is required.'),
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Valid email is required.')
});

const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'intakes.json');

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));

async function saveIntake(payload) {
  await fs.mkdir(dataDir, { recursive: true });
  let existing = [];

  try {
    const raw = await fs.readFile(dataFile, 'utf8');
    const parsed = JSON.parse(raw);
    existing = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  existing.push({
    ...payload,
    receivedAt: new Date().toISOString()
  });

  await fs.writeFile(dataFile, JSON.stringify(existing, null, 2));
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/intake', async (req, res) => {
  const parsed = intakeSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: 'Invalid intake submission.',
      issues: parsed.error.flatten()
    });
  }

  try {
    await saveIntake(parsed.data);
    return res.status(201).json({ status: 'ok' });
  } catch (error) {
    console.error('Failed to store intake submission.', error);
    return res.status(500).json({ message: 'Unable to store intake submission.' });
  }
});

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Legendary Tax Service running on port ${PORT}`);
});
