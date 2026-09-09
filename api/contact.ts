import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Input sanitization
function sanitize(input: string): string {
  return input.replace(/[<>]/g, '').trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const isConfigured = Boolean(
      process.env.SMTP_PASS && process.env.SMTP_PASS !== 'YOUR_GMAIL_APP_PASSWORD'
    );
    return res.status(200).json({
      status: 'ok',
      smtpConfigured: isConfigured,
      contactEmail: process.env.CONTACT_EMAIL || 'asifjanmsd3@gmail.com',
      whatsapp: '923370652074',
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, service, message } = req.body || {};

    // Strict Validation
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
      return res.status(400).json({
        success: false,
        error: 'Message is too long (maximum 3000 characters).',
      });
    }

    const cleanPayload = {
      name: sanitize(name),
      email: email.trim().toLowerCase(),
      service: service ? sanitize(String(service)) : 'General Inquiry',
      message: sanitize(message),
    };

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER || 'asifjanmsd3@gmail.com';
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_EMAIL || 'asifjanmsd3@gmail.com';

    if (!pass || pass === 'YOUR_GMAIL_APP_PASSWORD') {
      return res.status(503).json({
        success: false,
        isConfigMissing: true,
        error:
          'SMTP password is not configured on Vercel yet. Please set SMTP_PASS in Vercel project settings, or reach out directly on WhatsApp.',
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const subject = `[Portfolio Lead] ${cleanPayload.service} from ${cleanPayload.name}`;
    const textContent = `
New Client Inquiry from Portfolio Website:
------------------------------------------
Name: ${cleanPayload.name}
Email: ${cleanPayload.email}
Service Needed: ${cleanPayload.service}

Message:
${cleanPayload.message}

Sent on: ${new Date().toUTCString()}
`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #1f2937;">
        <h2 style="color: #059669; margin-top: 0; font-size: 20px; border-bottom: 2px solid #10b981; padding-bottom: 12px;">
          New Portfolio Client Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 130px; font-weight: 600;">Client Name:</td>
            <td style="padding: 8px 0; color: #111827; font-weight: bold;">${cleanPayload.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${cleanPayload.email}" style="color: #059669; text-decoration: none; font-weight: 600;">${cleanPayload.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Service Required:</td>
            <td style="padding: 8px 0; color: #111827;"><span style="background-color: #ecfdf5; color: #065f46; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600;">${cleanPayload.service}</span></td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #10b981;">
          <h4 style="margin: 0 0 8px 0; color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Client Message:</h4>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #1f2937; font-size: 14px;">${cleanPayload.message}</p>
        </div>
        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #f3f4f6; font-size: 12px; color: #9ca3af; text-align: center;">
          Sent from M. Asif Khan Portfolio Website Contact Form
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${cleanPayload.name} via Portfolio" <${user}>`,
      to: recipient,
      replyTo: cleanPayload.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error: any) {
    console.error('Vercel serverless contact error:', error?.message || error);
    return res.status(500).json({
      success: false,
      error: 'Something went wrong while sending email. Please try WhatsApp or direct email.',
    });
  }
}
