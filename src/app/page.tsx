import Link from "next/link";
import { FileText, Database, Send, BarChart3, Newspaper, Users, Zap, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-amber-100 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Newspaper className="w-8 h-8 text-amber-500" />
            <div className="text-2xl font-bold text-[#121212]">
              Press<span className="text-amber-500">Kit</span>
            </div>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/dashboard" className="text-[#121212]/70 hover:text-[#121212] font-medium">
              Dashboard
            </Link>
            <Link href="/pricing" className="text-[#121212]/70 hover:text-[#121212] font-medium">
              Pricing
            </Link>
            <Link href="/login" className="btn-primary">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero - Asymmetric 60/40 Layout */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left side - 60% */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              AI-Powered PR
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#121212] mb-6 leading-tight">
              Stop paying $60K/month for PR agencies
            </h1>
            <p className="text-lg sm:text-xl text-[#121212]/70 mb-8 max-w-xl">
              AI-powered press releases, curated journalist database, and automated pitch emails.
              Get the coverage your startup deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/lifetime" className="btn-primary text-lg text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                🔥 Get Lifetime Deal ($299) →
              </Link>
              <Link href="/dashboard" className="btn-secondary text-lg text-center">
                Start Free Trial
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#121212]/50">
              <span className="text-amber-600 font-medium">⚡ Limited: 50 spots at $299 (save $588/year)</span> · No credit card required
            </p>
          </div>
          
          {/* Right side - 40% - Signature Moment: Press Kit Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl border border-amber-200 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">PressKit Preview</span>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <div className="text-xs text-[#121212]/50 mb-1">HEADLINE</div>
                  <div className="text-[#121212] font-semibold">Startup Raises $2M Seed Round</div>
                </div>
                <div>
                  <div className="text-xs text-[#121212]/50 mb-1">JOURNALISTS MATCHED</div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-500" />
                    <span className="text-[#121212] font-semibold">127 reporters</span>
                    <span className="text-green-600 text-sm">92% match rate</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#121212]/50 mb-1">PITCH EMAIL</div>
                  <div className="bg-[#FAFAF8] rounded-lg p-3 text-sm text-[#121212]/70">
                    "Hi [Journalist], I noticed you cover fintech startups..."
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-amber-500" />
                    <span className="text-sm text-[#121212]/70">Ready to send</span>
                  </div>
                  <div className="text-amber-500 font-semibold">View Full Kit →</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-amber-500">500+</div>
              <div className="text-[#FAFAF8]/70">Founders</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-amber-500">10K+</div>
              <div className="text-[#FAFAF8]/70">Journalists</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-amber-500">50K+</div>
              <div className="text-[#FAFAF8]/70">Pitches Sent</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-amber-500">$0</div>
              <div className="text-[#FAFAF8]/70">Agency Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
            Everything you need for press coverage
          </h2>
          <p className="text-lg text-[#121212]/70 max-w-2xl mx-auto">
            One platform. Zero agency fees. Complete control.
          </p>
        </div>
        
        <div className="bento-grid">
          {/* Large Card - Press Release Generator */}
          <div className="bento-card-large card bg-gradient-to-br from-white to-amber-50/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <FileText className="w-8 h-8 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#121212] mb-2">AI Press Release Generator</h3>
                <p className="text-[#121212]/70 mb-4">
                  Answer a few questions, get a professional press release in seconds. 
                  Our AI is trained on thousands of successful releases.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-amber-600">
                    <Zap className="w-4 h-4" />
                    30s generation
                  </span>
                  <span className="text-[#121212]/50">|</span>
                  <span className="text-[#121212]/70">100% customizable</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Regular Card - Journalist Database */}
          <div className="card">
            <div className="p-3 rounded-xl bg-amber-500/10 w-fit mb-4">
              <Database className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-[#121212] mb-2">10K+ Journalists</h3>
            <p className="text-[#121212]/70 text-sm">
              Curated database of journalists. Filter by beat, outlet, location, and past coverage.
            </p>
          </div>
          
          {/* Regular Card - Pitch Automation */}
          <div className="card">
            <div className="p-3 rounded-xl bg-amber-500/10 w-fit mb-4">
              <Send className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-[#121212] mb-2">Pitch Automation</h3>
            <p className="text-[#121212]/70 text-sm">
              Personalized pitches at scale. Track opens, clicks, and responses in real-time.
            </p>
          </div>
          
          {/* Large Card - Analytics */}
          <div className="bento-card-large card bg-gradient-to-br from-white to-amber-50/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <BarChart3 className="w-8 h-8 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#121212] mb-2">Analytics Dashboard</h3>
                <p className="text-[#121212]/70 mb-4">
                  Track open rates, response rates, and coverage. Know exactly what's working.
                  Export reports for your team.
                </p>
                <div className="flex gap-6">
                  <div>
                    <div className="text-2xl font-bold text-amber-500">42%</div>
                    <div className="text-xs text-[#121212]/50">Avg Open Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-500">18%</div>
                    <div className="text-xs text-[#121212]/50">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-500">3.2x</div>
                    <div className="text-xs text-[#121212]/50">vs Agency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Regular Card - Media Kit */}
          <div className="card">
            <div className="p-3 rounded-xl bg-amber-500/10 w-fit mb-4">
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-[#121212] mb-2">Track Coverage</h3>
            <p className="text-[#121212]/70 text-sm">
              Monitor mentions across 50K+ publications. Get alerts when your story runs.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#121212] mb-12">
            Trusted by 500+ founders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Got featured in TechCrunch within 2 weeks. PressKit paid for itself 100x over."
              author="Sarah Chen"
              role="Founder, CloudScale"
              publication="TechCrunch"
            />
            <TestimonialCard
              quote="Finally, PR I can afford. The AI press release generator alone is worth $5K/month."
              author="Marcus Williams"
              role="CEO, DevTools"
              publication="Forbes"
            />
            <TestimonialCard
              quote="From idea to TechCrunch in 48 hours. This is the future of startup PR."
              author="Alex Rivera"
              role="Founder, AIStartup"
              publication="Wired"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="pricing">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-[#121212]/70">
            Start free, upgrade when you need more
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="card hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-[#121212] mb-2">Free</h3>
            <div className="text-4xl font-bold text-[#121212] mb-4">$0<span className="text-lg font-normal text-[#121212]/50">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-[#121212]/70">
                <span className="text-amber-500">✓</span> 3 press releases/month
              </li>
              <li className="flex items-center gap-2 text-[#121212]/70">
                <span className="text-amber-500">✓</span> 100 journalist contacts
              </li>
              <li className="flex items-center gap-2 text-[#121212]/70">
                <span className="text-amber-500">✓</span> 50 pitches/month
              </li>
              <li className="flex items-center gap-2 text-[#121212]/70">
                <span className="text-amber-500">✓</span> Basic analytics
              </li>
            </ul>
            <Link href="/login" className="btn-secondary w-full block text-center">
              Get Started
            </Link>
          </div>
          {/* Pro Plan */}
          <div className="card border-2 border-amber-500 relative bg-gradient-to-br from-white to-amber-50/30">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-2">Pro</h3>
            <div className="text-4xl font-bold text-[#121212] mb-4">$49<span className="text-lg font-normal text-[#121212]/50">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-[#121212]/70">
                <span className="text-amber-500">✓</span> Unlimited press releases
              </li>
              <li className="flex items-center gap-2 text-[#121212]/70">
                <span className="text-amber-500">✓</span> 10,000+ journalist contacts
              </li>
              <li className="flex items-center gap-2 text-[#121212]/70">
                <span className="text-amber-500">✓</span> Unlimited pitches
              </li>
              <li className="flex items-center gap-2 text-[#121212]/70">
                <span className="text-amber-500">✓</span> Advanced analytics
              </li>
              <li className="flex items-center gap-2 text-[#121212]/70">
                <span className="text-amber-500">✓</span> Priority support
              </li>
            </ul>
            <Link href="/login" className="btn-primary w-full block text-center">
              Start 14-Day Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to get featured?
          </h2>
          <p className="text-xl text-[#FAFAF8]/70 mb-8">
            Join 500+ founders getting press coverage without the agency fees.
          </p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all shadow-lg">
            Start Your Free Trial
            <Send className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0b] text-[#FAFAF8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-amber-500" />
              <div className="text-xl font-bold text-white">
                Press<span className="text-amber-500">Kit</span>
              </div>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 text-sm text-center">
            © {new Date().getFullYear()} PressKit.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

function TestimonialCard({ quote, author, role, publication }: { quote: string; author: string; role: string; publication: string }) {
  return (
    <div className="card hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-medium">
          {publication}
        </span>
      </div>
      <p className="text-[#121212]/80 mb-4">"{quote}"</p>
      <div className="font-semibold text-[#121212]">{author}</div>
      <div className="text-sm text-[#121212]/50">{role}</div>
    </div>
  );
}