export const metadata = {
  title: 'Thank You - Japanese Calligraphy School',
  description: 'Welcome to your shodo journey',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        {/* Kanji decoration */}
        <div className="text-6xl text-red/20 font-serif">
          書道
        </div>

        <h1 className="text-4xl md:text-5xl font-light text-charcoal">
          Welcome to Your Practice
        </h1>

        <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
          <p>
            Thank you for joining Japanese Calligraphy School.
          </p>
          <p>
            You'll receive an email within the next few minutes with:
          </p>
          <ul className="text-left max-w-md mx-auto space-y-2">
            <li>✓ Your course access details</li>
            <li>✓ Materials guide and Amazon links</li>
            <li>✓ Welcome video from Master Tanaka</li>
          </ul>
          <p className="pt-4">
            Check your inbox (and spam folder) for an email from us.
          </p>
        </div>

        <div className="pt-8">
          <p className="text-sm text-charcoal/60">
            Questions? Email us at hello@japanesecalligraphy.school
          </p>
        </div>

        {/* Red decorative line */}
        <div className="pt-12">
          <div className="h-px bg-red/30 max-w-md mx-auto"></div>
        </div>

        <p className="text-charcoal/60 italic font-light">
          "Every stroke is an opportunity for presence."
        </p>
      </div>
    </div>
  )
}
