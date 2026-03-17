# PressKit Specification

## Product Vision
- **One-sentence description**: Automated PR and press kit generation platform for makers and indie hackers
- **Target user**: Independent developers, makers, and startups without dedicated PR teams
- **Core value proposition**: Generate professional press kits, press releases, and media assets in minutes instead of hours

## Technical Stack
- **Frontend framework**: Next.js 14 (App Router)
- **Backend**: Next.js API routes + Supabase
- **Database**: PostgreSQL (Supabase)
- **Hosting**: Vercel
- **Authentication**: Supabase Auth
- **Key dependencies**:
  - Supabase client for database and auth
  - OpenAI/Mistral for AI-powered content generation
  - Tailwind CSS for styling

## User Stories

### Must-have Stories (MVP)
1. As a maker, I can generate a professional press kit from my product description
2. As a maker, I can customize press release templates for different announcements
3. As a maker, I can download press kits as PDF or share via link
4. As a user, I can store multiple press kits for different products
5. As a user, I can edit generated content before publishing

### Should-have Stories (v1.1)
1. As a maker, I can generate social media assets from press kit content
2. As a user, I can track press kit views and downloads
3. As a user, I can collaborate with team members on press kits
4. As a maker, I can generate email pitches for journalists

### Nice-to-have Stories (Future)
1. AI-powered journalist matching and outreach
2. Press release distribution partnerships
3. Media monitoring and mentions tracking
4. Integration with Product Hunt launch pages
5. Automated press schedule for launches

## Feature Specification

### Feature 1: Press Kit Builder
- **Description**: Guided creation of professional press kits
- **Components**:
  - Company/product information input
  - Auto-generated founder bios
  - Product screenshots section
  - Logo and brand assets
  - Fact sheet generation
  - Contact information

### Feature 2: Press Release Generator
- **Description**: AI-powered press release creation
- **Capabilities**:
  - Multiple templates (product launch, feature update, funding, etc.)
  - Custom tone and style options
  - Quote generation from product descriptions
  - Headline suggestions with SEO optimization
  - Boilerplate text management

### Feature 3: Media Asset Manager
- **Description**: Organize and serve brand assets
- **Features**:
  - Logo uploads (PNG, SVG, light/dark variants)
  - Screenshot gallery with captions
  - Promo images and videos
  - Downloadable asset packages
  - Hot-linked image URLs

### Feature 4: Distribution Tools
- **Description**: Share press kits with journalists and media
- **Capabilities**:
  - Public/private press kit links
  - Email-friendly share links
  - PDF export
  - Embeddable press kit widgets
  - Custom domain support (future)

### Feature 5: Analytics Dashboard
- **Description**: Track press kit performance
- **Metrics**:
  - Total views
  - Download counts
  - Geographic distribution
  - Referral sources
  - Time on page

## API Specification

### Endpoints

#### POST /api/presskits
- **Purpose**: Create new press kit
- **Auth**: Required
- **Body**:
  ```json
  {
    "company_name": "Acme Inc",
    "product_name": "Widget Pro",
    "tagline": "The best widget",
    "description": "Long-form description...",
    "website": "https://acme.com",
    "founder_name": "John Doe",
    "year_founded": 2026
  }
  ```
- **Response**: Press kit object with ID

#### GET /api/presskits/:id
- **Purpose**: Get press kit details
- **Auth**: Public (if published) or owner
- **Response**: Full press kit with assets

#### POST /api/presskits/:id/releases
- **Purpose**: Generate press release
- **Auth**: Required (owner)
- **Body**:
  ```json
  {
    "type": "product_launch",
    "headline": "Custom headline",
    "tone": "professional",
    "include_quotes": true
  }
  ```
- **Response**: Generated press release text

#### POST /api/assets
- **Purpose**: Upload media asset
- **Auth**: Required
- **Body**: Multipart form with file
- **Response**: Asset object with URL

### Auth Method
- Supabase Auth with email/password
- Magic link authentication
- Session-based for web
- API tokens for integrations

### Rate Limits
- Free: 100 requests/day
- Pro: 1000 requests/day
- Enterprise: Unlimited

## Database Schema

### Tables

#### press_kits
```sql
CREATE TABLE press_kits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) NOT NULL,
  company_name TEXT NOT NULL,
  product_name TEXT NOT NULL,
  tagline TEXT,
  description TEXT,
  website TEXT,
  founded_year INTEGER,
  is_published BOOLEAN DEFAULT FALSE,
  custom_domain TEXT,
  views INTEGER DEFAULT 0,
  downloads INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### founders
```sql
CREATE TABLE founders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  press_kit_id UUID REFERENCES press_kits(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  title TEXT,
  bio TEXT,
  photo_url TEXT,
  social_links JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### assets
```sql
CREATE TABLE assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  press_kit_id UUID REFERENCES press_kits(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('logo', 'screenshot', 'promo', 'video')),
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  alt_text TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### releases
```sql
CREATE TABLE releases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  press_kit_id UUID REFERENCES press_kits(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  headline TEXT NOT NULL,
  body TEXT NOT NULL,
  quotes JSONB DEFAULT '[]',
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Indexes
```sql
CREATE INDEX idx_presskits_user ON press_kits(user_id);
CREATE INDEX idx_presskits_slug ON press_kits(slug);
CREATE INDEX idx_assets_presskit ON assets(press_kit_id);
CREATE INDEX idx_releases_presskit ON releases(press_kit_id);
```

## UI/UX Specification

### Key Pages
1. **Landing Page** (`/`)
   - Hero with example press kits
   - Feature showcase
   - Pricing
   - CTA: "Create Your Press Kit"

2. **Dashboard** (`/dashboard`)
   - List of press kits
   - Quick create button
   - Recent activity
   - Quick export options

3. **Editor Page** (`/presskit/:id/edit`)
   - Left: Edit sections
   - Right: Live preview
   - Save/publish controls
   - Asset upload panel

4. **Public Press Kit** (`/presskit/:slug`)
   - Professional layout
   - Download buttons
   - Contact information
   - Social sharing

5. **Press Release Generator** (`/presskit/:id/release`)
   - Template selection
   - Tone/taste options
   - Live preview
   - Export options

### User Flows

#### Flow 1: Create First Press Kit
1. Sign up or login
2. Enter company/product information
3. Upload logo and screenshots
4. Review auto-generated content
5. Edit and customize
6. Save and publish
7. Share link or download PDF

#### Flow 2: Generate Press Release
1. Open existing press kit
2. Click "Generate Press Release"
3. Select announcement type
4. Customize headline and tone
5. Review generated content
6. Edit quotes and details
7. Export or publish

#### Flow 3: Share Press Kit
1. Open published press kit
2. Copy shareable link
3. Send to journalist or paste in email
4. Track view analytics
5. See engagement metrics

### Design System

#### Typography
- **Headlines**: Inter Variable (weight 700) - **Note: Update to Instrument Serif or Playfair Display**
- **Body**: Inter Variable (weight 400-500) - **Note: Update to Satoshi for premium feel**
- **Code/Data**: JetBrains Mono (weight 400)

#### Colors (Current)
- **Primary**: #4F46E5 (Indigo) - **Note: Violates design-taste, purple/blue AI aesthetic**

#### Recommended Colors (Design-Taste Compliant)
- **Primary**: #059669 (Emerald) - Professional, trustworthy
- **Secondary**: #DC2626 (Red) - Attention-grabbing for CTA
- **Background**: #FAFAF8 (Cream white)
- **Card**: #FFFFFF
- **Text**: #121212 (Warm black)
- **Accent**: #F59E0B (Amber) for highlights

#### Spacing
- Base unit: 8px
- Section padding: 48px
- Card padding: 24px
- Form gaps: 16px

### Signature Moment
The **Real-Time Press Kit Preview** - A split-screen editor with:
1. Left side: Form inputs with smart suggestions
2. Right side: Professional press kit layout updating in real-time
3. As you type company name, logo placement adjusts
4. Screenshots auto-resize and preview
5. Export button with "Download as PDF" dropdown
6. Animated "Saving..." indicator

This creates immediate visual feedback showing users the polished output before they're done.

## Pricing Model

### Current Pricing
- Free tier available
- Pro: $10/month (from Stripe payment link)

### Recommended Pricing
- **Starter**: $0/month
  - 1 press kit
  - Basic templates
  - Community support

- **Maker**: $19/month
  - 5 press kits
  - All templates
  - Analytics dashboard
  - Custom branding
  - Priority support

- **Studio**: $49/month
  - Unlimited press kits
  - Team collaboration
  - Custom domain
  - API access
  - White-label options
  - Dedicated support

### Rationale
- Makers need multiple press kits for different products
- $19/mo for indie makers is reasonable
- Studio tier for agencies managing multiple clients
- White-label justifies premium pricing

## Marketing Strategy

### Target Keywords
- "press kit generator" (medium competition)
- "press release template" (high competition)
- "indie hacker PR" (niche, low competition)
- "product launch press kit" (emerging)
- "media kit software" (medium competition)

### Competitors
1. **PressKit.to** - Legacy, poor UX
2. **PressPass** - Expensive, enterprise-focused
3. **Canva** - Generic design tool, not press-specific
4. **DIY Word/Google Docs** - Time-consuming, unprofessional

### Differentiation
1. **AI-powered content**: Generate high-quality content automatically
2. **Made for makers**: Focused on indie hackers and startups
3. **One-click PDF**: Professional PDF generation
4. **Affordable**: SMB pricing, not enterprise-only
5. **Modern UI**: Clean, intuitive interface

### Distribution Channels
1. **Indie Hackers**: Featured post, community engagement
2. **Product Hunt**: Launch and ongoing presence
3. **Twitter**: #BuildInPublic with maker community
4. **Dev.to**: Tutorials on PR for developers
5. **Newsletter sponsorships**: Maker-focused newsletters
6. **Referrals**: Invite friends for extra press kits

## Success Metrics

### Key Metrics to Track
1. **Press Kits Created**: Total count
2. **Press Kits Published**: Published to public links
3. **Downloads per Kit**: Engagement metric
4. **Press Release Generations**: AI usage
5. **Share Link Clicks**: Distribution metric

### Goals (30/60/90 Days)

#### Day 30
- 100 users signed up
- 50 press kits created
- 20 published to public links
- 5 paying customers
- Featured in 1 newsletter

#### Day 60
- 500 users signed up
- 200 press kits created
- 100 published
- 25 paying customers
- 10 integrations with Product Hunt launches

#### Day 90
- 1000 users signed up
- 500 press kits created
- 250 published
- 50 paying customers
- $500 MRR
- 5 journalist referrals

## Technical Debt / Known Issues

### Current Issues
1. **Inter/Indigo colors**: Violate design-taste guidelines
2. **Limited AI templates**: Only basic press release types
3. **No PDF preview**: Can't preview before downloading
4. **No analytics**: Missing view/download tracking
5. **No team features**: Single-user only

### Priority Fixes Needed

#### High Priority
1. Update color scheme to warm emerald/amber tones
2. Change typography to Instrument Serif + Satoshi
3. Implement PDF preview before download
4. Add basic analytics tracking

#### Medium Priority
1. Add more AI templates (funding, acquisition, milestone)
2. Implement team collaboration (invite members)
3. Add social media asset generation
4. Improve mobile responsiveness

#### Low Priority
1. Custom domain support
2. White-label options for agencies
3. API for developers
4. Zapier/integration marketplace
5. Press release distribution partnerships

## File Locations

### Repository Path
`/home/localadmin/.openclaw/workspace/projects/presskit/`

### Key Files to Modify
1. `src/app/page.tsx` - Landing page
2. `src/app/layout.tsx` - Main layout
3. `src/lib/supabase.ts` - Database client
4. `src/lib/auth.ts` - Authentication logic
5. `tailwind.config.ts` - Color customization

### Configuration Files
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Deployment settings
- `package.json` - Dependencies