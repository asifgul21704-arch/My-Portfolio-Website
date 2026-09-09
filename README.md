# M. Asif Khan — Full-Stack Web Developer Portfolio

A modern, high-performance developer portfolio website designed for international clients, featuring responsive design, dark/light theme toggle, real contact form delivery with Gmail SMTP & Nodemailer, direct WhatsApp integration, interactive project showcases, and a one-page printable CV modal.

---

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons, Motion
- **Backend / APIs**: Express.js (Local & Cloud Run) / Vercel Serverless Functions (`/api/contact.ts`)
- **Email Delivery**: Nodemailer with Gmail SMTP / Google App Password
- **Deployment**: Vercel & Docker / Cloud Run ready

---

## 1. Local Development Setup

### Prerequisites
- Node.js 18+ or 20+ installed
- npm or yarn

### Steps
1. Clone or download the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/asif-khan-portfolio.git
   cd asif-khan-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Add your configuration values in `.env`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=asifjanmsd3@gmail.com
   SMTP_PASS=your_16_character_app_password
   CONTACT_EMAIL=asifjanmsd3@gmail.com
   ```

5. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. Environment Variables & Secrets

Never commit `.env` or real passwords to GitHub. The `.gitignore` file already excludes all `.env` files.

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `SMTP_HOST` | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port (`465` for SSL, `587` for TLS) | `465` |
| `SMTP_USER` | Gmail address used to send emails | `asifjanmsd3@gmail.com` |
| `SMTP_PASS` | 16-character Google App Password | *(Keep private)* |
| `CONTACT_EMAIL` | Destination email to receive inquiries | `asifjanmsd3@gmail.com` |
| `APP_URL` | Base URL of deployed website | `https://your-portfolio.vercel.app` |
| `GEMINI_API_KEY` | Optional Gemini API key | `YOUR_API_KEY` |

### How to generate a Gmail App Password:
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Ensure **2-Step Verification** is turned ON.
3. Open [Google App Passwords](https://myaccount.google.com/apppasswords).
4. Create an App name (e.g., `Portfolio`).
5. Copy the generated 16-character code (e.g., `abcd efgh ijkl mnop`).
6. Paste it into `SMTP_PASS` (without spaces).

---

## 3. Production Build

Test your production build locally:

```bash
npm run build
```

This compiles both the Vite client-side SPA into `dist/` and checks TypeScript types.

---

## 4. GitHub Upload Instructions

Run the following commands in your project root to push to GitHub:

```bash
# 1. Initialize git repository (if not already initialized)
git init

# 2. Add all files (secrets are automatically ignored by .gitignore)
git add .

# 3. Commit your files
git commit -m "Production ready portfolio for Vercel deployment"

# 4. Set main branch
git branch -M main

# 5. Connect to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/asifgul21704-arch/asif-khan-portfolio.git

# 6. Push to GitHub
git push -u origin main
```

---

## 5. Deploying to Vercel

### Option A: Import via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New Project"** -> **"Project"**.
3. Select your repository (`asif-khan-portfolio`) and click **Import**.
4. Configure Project Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Under **Environment Variables**, add:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `465`
   - `SMTP_USER` = `asifjanmsd3@gmail.com`
   - `SMTP_PASS` = *Your 16-character Gmail App Password*
   - `CONTACT_EMAIL` = `asifjanmsd3@gmail.com`
6. Click **Deploy**. Vercel will build the frontend and deploy the serverless `/api/contact` function!

### Option B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

---

## 6. Custom Domain Setup on Vercel

1. In your Vercel Project Dashboard, navigate to **Settings** > **Domains**.
2. Type your domain name (e.g., `asifkhan.dev` or `www.asifkhan.dev`) and click **Add**.
3. Follow the DNS instructions provided by Vercel:
   - For Apex domain (`asifkhan.dev`): Add an **A Record** pointing to `76.76.21.21`.
   - For Subdomain (`www`): Add a **CNAME Record** pointing to `cname.vercel-dns.com`.
4. Vercel automatically provisions free SSL certificates within minutes.

---

## 7. Security Features
- **Zero Exposed Secrets**: All credentials reside in server-side environment variables.
- **Input Sanitization**: Strip tags and limit character counts to prevent XSS.
- **Rate Limiting**: Throttles abuse and spam attempts.
- **Failover Fallback**: Form includes one-click WhatsApp and mailto fallbacks if email delivery fails.
