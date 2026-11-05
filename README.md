# M. Asif Khan — Full-Stack Web Developer

A professional developer portfolio built to present selected web applications, technical skills, and contact options.

## Technology

- React 19, TypeScript, Vite
- Tailwind CSS, Lucide React, Motion
- Node.js and Express
- Nodemailer for server-side contact email
- Helmet and express-rate-limit for baseline API hardening
- Vercel deployment configuration

## Local development

```bash
git clone https://github.com/asifgul21704-arch/My-Portfolio-Website.git
cd My-Portfolio-Website
npm install
```

Create a local environment file from `.env.example` (if provided) and configure SMTP values on the server only. Never commit an app password or other secret.

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

Start the development server:

```bash
npm run dev
```

The local server is configured for port **3000**.

## Build and run

```bash
npm run lint
npm run build
npm start
```

## Contact and links

- Portfolio: https://my-portfolio-website-rho-ruddy.vercel.app
- LinkedIn: https://www.linkedin.com/in/muhammad-asif-129077399/
- Email: [asifgul21704@gmail.com](mailto:asifgul21704@gmail.com)

## Security

- Keep SMTP credentials and API keys in server-side environment variables.
- Do not place secrets in variables prefixed with `VITE_`.
- Keep `.env` files out of Git.
- Verify the contact endpoint and SMTP configuration in the deployment environment before advertising email delivery as active.

## Project status

Portfolio project. The repository includes a React frontend and Express contact API. The deployed contact flow depends on valid hosting environment variables and should be tested after deployment.
