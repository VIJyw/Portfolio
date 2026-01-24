# Product Management Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed to showcase Product Management and Technical Program Management experience.

## Features

- 🎨 Modern, clean design inspired by top PM portfolios
- 🌓 Dark mode support with system preference detection
- 📱 Fully responsive mobile-first design
- ⚡ Optimized performance with Next.js 14 App Router
- 🔒 Secure contact form with rate limiting
- ✨ Smooth animations with Framer Motion
- ♿ Accessible components with ARIA labels
- 🎯 SEO optimized with proper metadata

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Email:** Resend API
- **Fonts:** Inter (body), Plus Jakarta Sans (headings)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Resend API account (for contact form)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` and add your credentials:
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Resend API Setup

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Update the `from` email in `app/api/contact/route.ts` with your verified domain

### Customization

- **Content:** Edit files in `lib/data/` to update projects, capabilities, testimonials
- **Styling:** Modify `app/globals.css` and `tailwind.config.ts` for colors and fonts
- **Metadata:** Update SEO metadata in `app/layout.tsx`

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── projects/           # Project detail pages
│   └── api/                # API routes
├── components/             # React components
│   ├── layout/             # Navbar, Footer, etc.
│   ├── sections/           # Page sections
│   ├── projects/           # Project components
│   └── ui/                 # Reusable UI components
├── lib/                    # Utilities and data
│   ├── data/              # Project data, testimonials, etc.
│   ├── utils.ts           # Helper functions
│   └── validations.ts     # Zod schemas
└── public/                 # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will be automatically deployed on every push to main.

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Security Notes

- Never commit `.env.local` to version control
- All sensitive credentials are server-side only
- Contact form includes rate limiting (3 requests per hour per IP)
- Form inputs are validated and sanitized server-side

## License

This project is private and proprietary.

## Contact

For questions or issues, please contact through the portfolio contact form.
