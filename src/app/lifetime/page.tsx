import Link from "next/link";
import { FileText, Database, Send, BarChart3, Newspaper, Users, Zap, TrendingUp, Clock, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

export default function LifetimeDeal() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
          <Zap className="w-4 h-4" />
          Limited Lifetime Deal
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#121212] mb-6 leading-tight">
          Lifetime Access to PressKit
        </h1>
        <p className="text-lg sm:text-xl text-[#121212]/70 mb-4 max-w-2xl mx-auto">
          Get unlimited access to PressKit's Pro features with a single payment.
        </p>
        <p className="text-lg sm:text-xl text-[#121212]/70 mb-8 max-w-2xl mx-auto font-semibold">
          Limited to 50 founders - claim your spot now!
        </p>
        
        {/* Pricing Comparison */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-sm text-[#121212]/50 mb-2">Regular Price</div>
            <div className="text-4xl font-bold text-[#121212] line-through">$49/mo</div>
            <div className="text-sm text-[#121212]/50">($588/year)</div>
          </div>
          <div className="text-6xl font-bold text-amber-500">→</div>
          <div className="text-center">
            <div className="text-sm text-[#121212]/50 mb-2">Lifetime Deal</div>
            <div className="text-4xl font-bold text-[#121212]">$299</div>
            <div className="text-sm text-[#121212]/50">One-time payment</div>
          </div>
        </div>
        
        {/* CTA Button */}
        <Link
          href="https://buy.stripe.com/aFa00deiTdC29oN2kwd7q05"
          className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all text-lg shadow-lg"
        >
          Claim Your Lifetime Access
          <Send className="w-5 h-5" />
        </Link>
        
        {/* Urgency Notice */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#121212]/70">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          <span>Only <strong>50 spots available</strong> - don't miss out!</span>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
            Everything Included in Lifetime Deal
          </h2>
          <p className="text-lg text-[#121212]/70">
            All Pro features, forever. No monthly fees, no limits.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <div className="p-3 rounded-xl bg-amber-500/10 w-fit mx-auto mb-4">
              <FileText className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-3">Unlimited Press Releases</h3>
            <p className="text-[#121212]/70">
              Generate professional press releases anytime with our AI-powered generator.
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="p-3 rounded-xl bg-amber-500/10 w-fit mx-auto mb-4">
              <Database className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-3">10,000+ Journalists</h3>
            <p className="text-[#121212]/70">
              Full access to our curated journalist database with advanced filtering.
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="p-3 rounded-xl bg-amber-500/10 w-fit mx-auto mb-4">
              <Send className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-3">Unlimited Pitches</h3>
            <p className="text-[#121212]/70">
              Send personalized pitches to unlimited journalists with automation.
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="p-3 rounded-xl bg-amber-500/10 w-fit mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-3">Advanced Analytics</h3>
            <p className="text-[#121212]/70">
              Track open rates, responses, and coverage with detailed reports.
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="p-3 rounded-xl bg-amber-500/10 w-fit mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-3">Coverage Tracking</h3>
            <p className="text-[#121212]/70">
              Monitor mentions across 50,000+ publications with real-time alerts.
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="p-3 rounded-xl bg-amber-500/10 w-fit mx-auto mb-4">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-3">Priority Support</h3>
            <p className="text-[#121212]/70">
              Get fast, personalized support whenever you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-[#121212]/70">
              See how the Lifetime Deal stacks up against other plans.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-amber-100">
                  <th className="text-left py-4 px-4"></th>
                  <th className="text-center py-4 px-4">
                    <div className="text-xl font-bold text-[#121212]">Free</div>
                    <div className="text-sm text-[#121212]/50">$0/month</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="text-xl font-bold text-[#121212]">Pro</div>
                    <div className="text-sm text-[#121212]/50">$49/month</div>
                  </th>
                  <th className="text-center py-4 px-4 bg-amber-50">
                    <div className="text-xl font-bold text-[#121212]">Lifetime</div>
                    <div className="text-sm text-[#121212]/50">$299 one-time</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-amber-50">
                  <td className="py-4 px-4 font-medium text-[#121212]">Press Releases</td>
                  <td className="text-center py-4 px-4">3/month</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                  <td className="text-center py-4 px-4 bg-amber-50 font-semibold">Unlimited</td>
                </tr>
                <tr className="border-b border-amber-50">
                  <td className="py-4 px-4 font-medium text-[#121212]">Journalist Contacts</td>
                  <td className="text-center py-4 px-4">100</td>
                  <td className="text-center py-4 px-4">10,000+</td>
                  <td className="text-center py-4 px-4 bg-amber-50 font-semibold">10,000+</td>
                </tr>
                <tr className="border-b border-amber-50">
                  <td className="py-4 px-4 font-medium text-[#121212]">Pitches</td>
                  <td className="text-center py-4 px-4">50/month</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                  <td className="text-center py-4 px-4 bg-amber-50 font-semibold">Unlimited</td>
                </tr>
                <tr className="border-b border-amber-50">
                  <td className="py-4 px-4 font-medium text-[#121212]">Analytics</td>
                  <td className="text-center py-4 px-4">Basic</td>
                  <td className="text-center py-4 px-4">Advanced</td>
                  <td className="text-center py-4 px-4 bg-amber-50 font-semibold">Advanced</td>
                </tr>
                <tr className="border-b border-amber-50">
                  <td className="py-4 px-4 font-medium text-[#121212]">Coverage Tracking</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">✓</td>
                  <td className="text-center py-4 px-4 bg-amber-50 font-semibold">✓</td>
                </tr>
                <tr className="border-b border-amber-50">
                  <td className="py-4 px-4 font-medium text-[#121212]">Priority Support</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">✓</td>
                  <td className="text-center py-4 px-4 bg-amber-50 font-semibold">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-[#121212]">Savings vs Pro</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4 bg-amber-50 font-semibold text-amber-600">
                    Save $588/year
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121212] mb-4">
            Loved by 500+ Founders
          </h2>
          <p className="text-lg text-[#121212]/70">
            Join successful founders who trust PressKit for their PR needs.
          </p>
        </div>
        
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#121212]/70">
              Everything you need to know about the Lifetime Deal.
            </p>
          </div>
          
          <div className="space-y-4">
            <FAQItem
              question="What's included in the Lifetime Deal?"
              answer="You get unlimited access to all Pro features: unlimited press releases, 10,000+ journalist contacts, unlimited pitches, advanced analytics, coverage tracking, and priority support - forever."
            />
            
            <FAQItem
              question="How many spots are available?"
              answer="Only 50 spots are available for this exclusive Lifetime Deal. Once they're gone, this offer will never be available again."
            />
            
            <FAQItem
              question="Is this really a one-time payment?"
              answer="Yes! Pay once and get lifetime access to PressKit Pro features. No monthly fees, no hidden costs, no renewal required."
            />
            
            <FAQItem
              question="What happens after all 50 spots are sold?"
              answer="The Lifetime Deal will be permanently discontinued. You'll still be able to sign up for our regular Pro plan at $49/month."
            />
            
            <FAQItem
              question="Can I upgrade from Free to Lifetime?"
              answer="Absolutely! If you're currently on the Free plan, you can upgrade to Lifetime and keep all your data and settings."
            />
            
            <FAQItem
              question="Is there a money-back guarantee?"
              answer="Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied, just contact us for a full refund."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't Miss This Opportunity
          </h2>
          <p className="text-xl text-[#FAFAF8]/70 mb-8">
            Only 50 spots available. Claim your lifetime access now before it's too late.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-8">
            <div className="text-sm text-[#FAFAF8]/70 mb-2">Offer ends in:</div>
            <div className="flex justify-center gap-4">
              <div className="bg-[#FAFAF8]/10 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-sm text-[#FAFAF8]/70">Days</div>
              </div>
              <div className="bg-[#FAFAF8]/10 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-white">23</div>
                <div className="text-sm text-[#FAFAF8]/70">Hours</div>
              </div>
              <div className="bg-[#FAFAF8]/10 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-white">59</div>
                <div className="text-sm text-[#FAFAF8]/70">Minutes</div>
              </div>
              <div className="bg-[#FAFAF8]/10 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-white">59</div>
                <div className="text-sm text-[#FAFAF8]/70">Seconds</div>
              </div>
            </div>
          </div>
          
          <Link
            href="https://buy.stripe.com/aFa00deiTdC29oN2kwd7q05"
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all text-lg shadow-lg"
          >
            Claim Your Lifetime Access Now
            <Send className="w-5 h-5" />
          </Link>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#FAFAF8]/70">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>This offer expires soon - <strong>only 50 spots available</strong>!</span>
          </div>
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="card">
      <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-amber-50/50">
        <h3 className="font-semibold text-[#121212]">{question}</h3>
        <HelpCircle className="w-5 h-5 text-amber-500" />
      </div>
      <div className="px-4 pb-4 text-[#121212]/70">
        {answer}
      </div>
    </div>
  );
}