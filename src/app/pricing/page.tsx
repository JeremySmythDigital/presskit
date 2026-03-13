import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Press<span className="text-primary-600">Kit</span>.ai
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/login" className="btn-primary">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Pricing */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Start free. Upgrade when you need more.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Free</h2>
              <div className="text-5xl font-bold text-gray-900 mb-4">
                $0<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for getting started with PR</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">3 press releases per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">100 journalist contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">50 pitch emails per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>

              <Link href="/login" className="btn-secondary w-full block text-center text-lg">
                Get Started Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="card p-8 border-2 border-primary-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Pro</h2>
              <div className="text-5xl font-bold text-gray-900 mb-4">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className="text-gray-600 mb-6">For serious founders who want results</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Unlimited press releases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">10,000+ journalist contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Unlimited pitch emails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Advanced analytics & tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Priority email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">AI pitch personalization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Response tracking</span>
                </li>
              </ul>

              <Link href="/login" className="btn-primary w-full block text-center text-lg">
                Start 14-Day Free Trial
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <FAQ
                question="How does the free trial work?"
                answer="Start with our Free plan forever. When you're ready for unlimited features, upgrade to Pro for $49/month. No credit card required for the free tier."
              />
              <FAQ
                question="Can I cancel anytime?"
                answer="Yes! Cancel anytime from your dashboard. No long-term contracts, no hidden fees."
              />
              <FAQ
                question="What journalists are in the database?"
                answer="Our database includes 10,000+ curated journalists from top outlets like TechCrunch, Forbes, Wired, and more. Filter by beat, outlet, and location."
              />
              <FAQ
                question="How does AI personalization work?"
                answer="Our AI analyzes each journalist's recent coverage to craft personalized pitches that resonate. No more generic mass emails."
              />
              <FAQ
                question="Do you guarantee press coverage?"
                answer="No ethical PR service can guarantee coverage. But PressKit dramatically increases your chances by connecting you with the right journalists."
              />
              <FAQ
                question="What's included in the Pro plan?"
                answer="Unlimited everything: press releases, journalist access, pitch emails, plus advanced analytics and priority support."
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get featured?
            </h2>
            <p className="text-gray-600 mb-6">
              Join 500+ founders getting press coverage without the agency fees.
            </p>
            <Link href="/login" className="btn-primary text-lg">
              Start Free Today →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}