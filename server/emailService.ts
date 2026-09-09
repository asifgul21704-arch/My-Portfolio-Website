import nodemailer from 'nodemailer';

export interface EmailPayload {
  name: string;
  email: string;
  service?: string;
  message: string;
}

export async function sendContactEmail(payload: EmailPayload): Promise<{ success: boolean; message: string; isConfigMissing?: boolean }> {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER || 'asifjanmsd3@gmail.com';
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_EMAIL || 'asifjanmsd3@gmail.com';

  if (!pass || pass === 'YOUR_GMAIL_APP_PASSWORD' || pass.trim() === '') {
    return {
      success: false,
      message: 'SMTP credentials are not configured in environment variables. Please reach out directly via WhatsApp or email.',
      isConfigMissing: true,
    };
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

  const subject = `New Portfolio Inquiry from ${payload.name} (${payload.service || 'General'})`;
  const textContent = `
Name: ${payload.name}
Email: ${payload.email}
Service: ${payload.service || 'Not specified'}

Message:
${payload.message}
  `.trim();

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; color: #1a202c;">
      <h2 style="color: #059669; margin-top: 0;">New Project Inquiry</h2>
      <p style="font-size: 14px; color: #64748b; margin-bottom: 24px;">Received via portfolio contact form</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-weight: 600; width: 100px; color: #475569;">From:</td>
          <td style="padding: 8px 0; color: #0f172a;">${payload.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #475569;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${payload.email}" style="color: #059669; text-decoration: none;">${payload.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #475569;">Service:</td>
          <td style="padding: 8px 0; color: #0f172a;">${payload.service || 'General Inquiry'}</td>
        </tr>
      </table>

      <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #059669; margin-bottom: 24px;">
        <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Message:</h4>
        <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #1e293b;">${payload.message}</p>
      </div>

      <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
        Sent directly to M. Asif Khan Portfolio Inbox
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${payload.name} via Portfolio" <${user}>`,
      to: recipient,
      replyTo: payload.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return {
      success: true,
      message: 'Message sent successfully.',
    };
  } catch (error: any) {
    console.error('Nodemailer send error:', error?.message || error);
    const errorMsg = String(error?.message || '');
    const isAppPassNeeded =
      errorMsg.includes('Application-specific password') ||
      errorMsg.includes('534-5.7.9') ||
      errorMsg.includes('535-5.7.8') ||
      errorMsg.includes('Invalid login') ||
      errorMsg.includes('BadCredentials');

    return {
      success: false,
      message: isAppPassNeeded
        ? 'Gmail requires a 16-character Google App Password (not your regular Gmail password). In the meantime, please send your message directly via WhatsApp or Email below.'
        : 'Failed to deliver email. Please reach out directly via WhatsApp or email.',
      isConfigMissing: isAppPassNeeded,
    };
  }
}
