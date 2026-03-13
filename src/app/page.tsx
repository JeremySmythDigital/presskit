import Link from "next/link";
import { FileText, Database, Send, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            Press<span className="text-primary-600">Kit</span>.ai
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/login" className="btn-primary">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Stop paying $60K/month
            <br />
            <span className="text-primary-600">for PR agencies</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered press releases, curated journalist database, and automated pitch emails.
            Get the coverage your startup deserves.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary text-lg">
              Start Free Trial →
            </Link>
            <Link href="/pricing" className="btn-secondary text-lg">
              View Pricing
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything you need for press coverage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FileText className="w-8 h-8 text-primary-600" />}
              title="Press Release Generator"
              description="AI writes professional press releases in seconds. Just answer a few questions about your news."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-primary-600" />}
              title="Journalist Database"
              description="Access 10,000+ curated journalist contacts. Filter by beat, outlet, and location."
            />
            <FeatureCard
              icon={<Send className="w-8 h-8 text-primary-600" />}
              title="Pitch Automation"
              description="Send personalized pitches to hundreds of journalists. Track opens and responses."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-primary-600" />}
              title="Analytics Dashboard"
              description="Track open rates, responses, and coverage. Know exactly what's working."
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Trusted by 500+ founders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Got featured in TechCrunch within 2 weeks. PressKit paid for itself 100x over."
              author="Sarah Chen"
              role="Founder, CloudScale"
            />
            <TestimonialCard
              quote="Finally, PR I can afford. The AI press release generator alone is worth $5K/month."
              author="Marcus Williams"
              role="CEO, DevTools"
            />
            <TestimonialCard
              quote="From idea to TechCrunch in 48 hours. This is the future of startup PR."
              author="Alex Rivera"
              role="Founder, AIStartup"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Start free, upgrade when you need more
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">$0<span className="text-lg font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> 3 press releases/month
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> 100 journalist contacts
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> 50 pitches/month
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Basic analytics
                </li>
              </ul>
              <Link href="/login" className="btn-secondary w-full block text-center">
                Get Started
              </Link>
            </div>
            {/* Pro Plan */}
            <div className="card border-2 border-primary-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">$49<span className="text-lg font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Unlimited press releases
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> 10,000+ journalist contacts
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Unlimited pitches
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Advanced analytics
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Priority support
                </li>
              </ul>
              <Link href="/login" className="btn-primary w-full block text-center">
                Start 14-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get featured?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 500+ founders getting press coverage without the agency fees.
          </p>
          <Link href="/dashboard" className="btn-primary text-lg">
            Start Your Free Trial →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">
              Press<span className="text-primary-500">Kit</span>.ai
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="card hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="card">
      <p className="text-gray-600 mb-4">"{quote}"</p>
      <div className="font-semibold text-gray-900">{author}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  );
}