'use client'

export default function StripeButtonAlt() {
  const handleCheckout = async () => {
    const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || '#'

    if (stripePaymentLink === '#') {
      alert('Stripe payment link not configured yet. Add NEXT_PUBLIC_STRIPE_PAYMENT_LINK to .env.local')
      return
    }

    window.location.href = stripePaymentLink
  }

  return (
    <button
      onClick={handleCheckout}
      className="bg-red hover:bg-darkRed text-cream px-12 py-4 rounded-lg text-xl font-medium transition-all hover:shadow-lg"
    >
      Begin Your Practice - $47
    </button>
  )
}
