import { Request, Response } from 'express';
import { sendContactEmail } from './emailService';

// Basic sanitization
function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, '') // remove html tag delimiters
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function handleContactSubmission(req: Request, res: Response) {
  try {
    const { name, email, service, message } = req.body || {};

    // Validate inputs
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid name (at least 2 characters).',
      });
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a message (at least 5 characters).',
      });
    }

    if (name.length > 100) {
      return res.status(400).json({ success: false, error: 'Name is too long.' });
    }

    if (message.length > 3000) {
      return res.status(400).json({ success: false, error: 'Message is too long (maximum 3000 characters).' });
    }

    const cleanPayload = {
      name: sanitize(name),
      email: email.trim().toLowerCase(),
      service: service ? sanitize(String(service)) : undefined,
      message: sanitize(message),
    };

    const result = await sendContactEmail(cleanPayload);

    if (!result.success) {
      return res.status(result.isConfigMissing ? 503 : 500).json({
        success: false,
        error: result.message || 'Something went wrong. Please try WhatsApp or email.',
        isConfigMissing: result.isConfigMissing,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error: any) {
    console.error('Contact form submission error:', error?.message || error);
    return res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try WhatsApp or email.',
    });
  }
}
