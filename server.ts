import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { handleContactSubmission } from './server/contactController';

dotenv.config();

const getDirname = () => {
  if (typeof __dirname !== 'undefined') return __dirname;
  return process.cwd();
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Security Headers via Helmet
  app.use(
    helmet({
      contentSecurityPolicy: false, // Vite and inline scripts/styles need CSP flexibility
      crossOriginEmbedderPolicy: false,
    })
  );

  // CORS configuration
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  // Body parser
  app.use(express.json({ limit: '100kb' }));
  app.use(express.urlencoded({ extended: true, limit: '100kb' }));

  // Rate Limiter for Contact API
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 contact requests per window
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      error: 'Too many messages sent from this IP. Please try again later or reach out directly on WhatsApp.',
    },
  });

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      smtpConfigured: Boolean(process.env.SMTP_PASS && process.env.SMTP_PASS !== 'YOUR_GMAIL_APP_PASSWORD'),
    });
  });

  app.get('/api/contact/status', (req, res) => {
    const isConfigured = Boolean(process.env.SMTP_PASS && process.env.SMTP_PASS !== 'YOUR_GMAIL_APP_PASSWORD');
    res.json({
      smtpConfigured: isConfigured,
      contactEmail: 'asifjanmsd3@gmail.com',
      whatsapp: '923370652074',
    });
  });

  app.post('/api/contact', contactLimiter, handleContactSubmission);

  // Vite middleware for development vs Static files in production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
