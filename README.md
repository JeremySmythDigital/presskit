# PressKit.ai - Founder PR Automation

**Get press coverage without the $60K/month agency fees.**

AI-powered press releases, curated journalist database, and automated pitch emails for founders.

## Features

- 🤖 **AI Press Release Generator** - Write professional press releases in seconds
- 📇 **Journalist Database** - 10,000+ curated journalist contacts
- 📧 **Pitch Automation** - Send personalized pitches at scale
- 📊 **Analytics Dashboard** - Track opens, responses, and coverage

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **AI**: Mistral API
- **Email**: Resend
- **Payments**: Stripe
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Accounts on:
  - [Supabase](https://supabase.com) (free tier)
  - [Mistral](https://mistral.ai) (API key)
  - [Resend](https://resend.com) (free tier)
  - [Stripe](https://stripe.com) (for payments)

### Setup

1. **Clone and install dependencies**
   ```bash
   cd presskit
   npm install
   ```

2. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy the project URL and anon key
   - Run the SQL schema in `supabase/schema.sql` in the Supabase SQL editor

3. **Configure environment**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your keys:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
   - `MISTRAL_API_KEY` - Your Mistral API key
   - `RESEND_API_KEY` - Your Resend API key
   - `STRIPE_SECRET_KEY` - Your Stripe secret key
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/presskit.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Update Stripe webhook**
   - Add your Vercel URL to Stripe webhook endpoints
   - Update `NEXT_PUBLIC_APP_URL` environment variable

## Project Structure

```
presskit/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # Authentication
│   │   │   ├── checkout/     # Stripe checkout
│   │   │   ├── generate-pitch/
│   │   │   ├── generate-release/
│   │   │   ├── journalists/
│   │   │   ├── pitches/
│   │   │   └── releases/
│   │   ├── dashboard/        # Dashboard pages
│   │   │   ├── journalists/
│   │   │   ├── pitches/
│   │   │   └── releases/
│   │   ├── login/
│   │   ├── pricing/
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Landing page
│   │   └── globals.css
│   └── lib/
│       ├── auth.ts
│       ├── database.types.ts
│       └── supabase.ts
├── supabase/
│   └── schema.sql
├── .env.example
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Pricing

- **Free**: $0/month
  - 3 press releases/month
  - 100 journalist contacts
  - 50 pitches/month
  
- **Pro**: $49/month
  - Unlimited press releases
  - 10,000+ journalists
  - Unlimited pitches
  - Advanced analytics

## License

MIT