import StripeButton from "./components/StripeButton";
import StripeButtonAlt from "./components/StripeButtonAlt";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Background Kanji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="text-[40rem] font-serif text-charcoal leading-none">
            書
          </span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Founding Students Badge */}
          <p className="text-sm text-charcoal/60 tracking-wide">
            First 50 students online • November 2025
          </p>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight">
            Your voice deserves more than a screen.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed font-light">
            Learn shodo—the ancient Japanese art of expressing what words alone cannot say.
          </p>

          {/* Hero Image */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Image
              src="/shodohero.jpg"
              alt="Japanese calligraphy brush creating a bold, flowing stroke in black ink"
              width={1200}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12">
            <div className="w-px h-16 bg-gradient-to-b from-charcoal/20 to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Pain/Pleasure Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              When Was The Last Time You Created Something?
            </h2>

            <p className="text-lg leading-relaxed">
              Not typed. Not texted. Not posted.
            </p>
            <p className="text-lg leading-relaxed">
              When was the last time you sat down with nothing but your thoughts and created something that could only exist because you made it?
            </p>

            <h3 className="text-2xl font-light pt-6">You Tell Yourself...</h3>

            <p className="text-lg leading-relaxed">
              Your handwriting is terrible. You haven't drawn since elementary school. You're not artistic.
            </p>

            <p className="text-lg leading-relaxed font-medium">
              But that's the point.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/shodo-vs-screen.jpg"
              alt="Hand creating calligraphy vs scrolling on phone"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Problem Dig-in */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
            We've Traded Presence For Productivity
          </h2>

          <div className="space-y-4">
            <p>Everything we create lives behind glass.</p>
            <p>
              Words we type, then delete, then retype. Digital everything. Nothing real. Nothing that breathes.
            </p>
            <p>And somewhere along the way, we stopped expressing what we actually feel.</p>
            <p>
              We consume content about mindfulness. We watch videos about meditation. We scroll past art instead of making it.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-light pt-8 text-center">
            But Here's What Really Keeps You Up At Night
          </h3>

          <div className="space-y-4">
            <p className="font-medium">
              You want a hobby that's actually meaningful.
            </p>
            <p>
              Not another app. Not another subscription. Not another thing to consume.
            </p>
            <p className="font-medium">
              Something meditative. Something that forces you to be present. Something therapeutic that doesn't involve talking about your feelings.
            </p>
            <p className="font-medium">
              You want to create something beautiful with your hands. Something that makes people say "wait... YOU made this?"
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <p className="font-medium text-xl text-center">
              Something screen-free. Something quiet. Something real.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Master Kaoru */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            A 40-Year Practice In Kamakura
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Master Portrait */}
            <div className="order-2 md:order-1">
              <Image
                src="/master-kaoru.jpg"
                alt="Master Kaoru Tanaka at her calligraphy desk in Kamakura"
                width={1200}
                height={1600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Story Text */}
            <div className="space-y-6 text-lg leading-relaxed order-1 md:order-2">
              <div className="space-y-4">
                <p>
                  For 40 years, Master Kaoru Tanaka has practiced shodo (書道) in a small studio in Kamakura.
                </p>
                <p>
                  Her grandfather taught her the old way. Not the rigid, academic way they teach in schools. The flowing, meditative way they practiced in temples for centuries.
                </p>
                <p className="font-medium italic">
                  One breath. One stroke. No going back.
                </p>
              </div>

              <h3 className="text-2xl font-light pt-6">
                "They Miss The Point Entirely"
              </h3>

              <div className="space-y-4">
                <p className="italic">
                  "Westerners think shodo is about perfect letters," Master Kaoru says. "They miss the point entirely."
                </p>
                <p className="font-medium">
                  "It's not about perfection. It's about presence. About expressing in one stroke what you could never say in a thousand words."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Continuation */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
            Why She's Teaching Online For The First Time
          </h2>

          <div className="space-y-4">
            <p>
              Master Kaoru never planned to teach online.
            </p>
            <p>
              For decades, students traveled to her studio in Kamakura. They sat on tatami mats. They learned the old way—slowly, patiently, in person.
            </p>
            <p>But something changed.</p>
          </div>

          <h3 className="text-2xl font-light pt-6">The Observation</h3>

          <div className="space-y-4">
            <p>
              She watched her daughter's generation—brilliant, creative people—spending their lives staring at screens.
            </p>
            <p>
              Consuming instead of creating. Anxious instead of present.
            </p>
            <p className="font-medium">"They need this more than anyone," she realized.</p>
          </div>

          <h3 className="text-2xl font-light pt-6">
            Her Daughter's Question
          </h3>

          <div className="space-y-4">
            <p className="italic">
              "If you don't share this now, this knowledge disappears. They're drowning in digital noise. Shodo could save them."
            </p>
            <p>
              So for the first time, Master Kaoru is teaching her 40-year practice online.
            </p>
            <p className="font-medium">
              Not because it's easier. Because it's necessary.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Mechanism Section */}
      <section className="relative py-32 px-6">
        {/* Background Kanji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <span className="text-[30rem] font-serif text-charcoal leading-none">
            書道
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-12">
            The Philosophy Behind The Brush
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-xl text-center font-light">
              Shodo isn't calligraphy in the Western sense. It's not about neat handwriting or decorative letters.
            </p>
            <p className="text-xl text-center font-medium">
              It's moving meditation. Expression without words. Personality captured in ink.
            </p>

            <div className="space-y-4 pt-8">
              <h3 className="text-2xl font-light">Ma (間) - The Space Between</h3>
              <p>
                What you DON'T write matters as much as what you do. Negative space. Silence. Breath.
              </p>
              <p className="italic">
                The blank paper isn't empty. It's full of potential. Every stroke you make is a conversation with the space around it.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">Mushin (無心) - No-Mind State</h3>
              <p>
                When you stop thinking and start flowing. The brush moves before thought. Pure presence.
              </p>
              <p>
                This is the state athletes call "the zone." Meditators call it "pure awareness." In shodo, you reach it with ink and paper.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">Ichigo Ichie (一期一会) - One Time, One Meeting</h3>
              <p>
                This stroke, right now, will never exist again. You can't undo it. You can't edit it.
              </p>
              <p className="font-medium">
                It's perfect because it's yours.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-light">Why Shodo Works When Apps Don't</h3>
              <p className="font-medium">Here's what students don't expect:</p>
              <p>
                You can't fake presence when you're holding a brush. One moment of distraction, and the ink knows. The paper knows. You know.
              </p>
              <p>
                It forces you into the moment in a way nothing digital ever could.
              </p>
              <p className="italic">
                You came to learn Japanese writing. You might leave understanding how to be present in your own life.
              </p>
            </div>

            <p className="font-medium pt-8 text-xl text-center">
              "For 40 years, I have watched students discover something they didn't know they were missing."
            </p>
          </div>
        </div>
      </section>

      {/* Class Modules */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            What You'll Learn
          </h2>

          <div className="space-y-8">
            {/* Module 1 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-red">1</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    The Fundamentals of Presence
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Everything you need to begin your practice
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Setting up your space (you don't need much)</li>
                    <li>• Holding the brush—posture, breath, intention</li>
                    <li>• The relationship between ink, water, and paper</li>
                    <li>• Your first stroke (and why it won't be perfect)</li>
                    <li>• The mindset: presence over perfection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-red">2</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Basic Strokes & Characters
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Building blocks of all Japanese writing
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• The 8 fundamental strokes that form all characters</li>
                    <li>• Writing your first kanji: 心 (kokoro - heart/mind)</li>
                    <li>• Practice characters that teach patience: 永 (eternity), 書 (writing)</li>
                    <li>• Why your "imperfect" strokes have more personality than perfect ones</li>
                    <li>• Developing your natural hand</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-red">3</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Breathing & Flow State
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Shodo as moving meditation
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Synchronizing breath with brush movement</li>
                    <li>• Entering mushin (no-mind) through repetition</li>
                    <li>• The art of ma (negative space)—when NOT to put ink down</li>
                    <li>• Moving meditation: shodo as therapy</li>
                    <li>• When the brush moves before thought</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-red">4</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Expression & Emotion
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    How feeling becomes form
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• How different emotions create different strokes</li>
                    <li>• Writing the same character in joy, sadness, anger—and seeing the difference</li>
                    <li>• Creating phrases that mean something to YOU</li>
                    <li>• The bridge between feeling and form</li>
                    <li>• Expressing what words cannot say</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-red">5</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2">
                    Personal Style & Mastery Path
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Making this practice your own
                  </p>
                  <ul className="space-y-2 text-charcoal/80">
                    <li>• Developing your unique hand (no two students write the same)</li>
                    <li>• Framing your work—turning practice into art for your walls</li>
                    <li>• Gift-worthy pieces: Names in kanji, meaningful phrases</li>
                    <li>• The lifetime practice: Where you go from here</li>
                    <li>• Continuing your journey beyond the course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-charcoal/70 mt-12 text-lg">
            Each module includes video instruction from Master Kaoru, practice exercises, and downloadable stroke guides.
          </p>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Plus These Bonuses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bonus 1 */}
            <div className="bg-warmGray/30 rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-serif text-red">
                Complete Materials Guide
              </h3>
              <p className="text-charcoal/70">
                Exact links to everything you need on Amazon and specialty suppliers. No guessing. No overbuying. Just what works, nothing you don't need.
              </p>
              <p className="text-sm text-charcoal/60">
                Budget option ~$30, premium option ~$60
              </p>
              <p className="font-medium text-red">$27 value</p>
            </div>

            {/* Bonus 2 */}
            <div className="bg-warmGray/30 rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-serif text-red">
                Start With What You Have
              </h3>
              <p className="text-charcoal/70">
                Can't get a brush yet? Start TODAY with just a pen and paper. Master Kaoru shows you how to practice the fundamentals with tools you already own.
              </p>
              <p className="text-sm text-charcoal/60">
                Upgrade to brush when you're ready
              </p>
              <p className="font-medium text-red">$37 value</p>
            </div>

            {/* Bonus 3 */}
            <div className="bg-warmGray/30 rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-serif text-red">
                Kanji Meaning Library
              </h3>
              <p className="text-charcoal/70">
                100+ kanji with meanings, pronunciations, and cultural context. Pick characters that resonate with you—not just random symbols, but words that carry weight.
              </p>
              <p className="font-medium text-red">$47 value</p>
            </div>
          </div>

          <p className="text-center text-lg mt-12 font-medium">
            Total Bonus Value: <span className="text-red">$111</span>
          </p>
        </div>
      </section>

      {/* Image Before Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/shodo-finished.jpg"
            alt="Beautiful finished shodo work - bold kanji on washi paper"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            Everything You Get
          </h2>

          <div className="bg-cream rounded-lg p-8 md:p-12 space-y-6 mb-12">
            <div className="space-y-3">
              <p className="text-lg"><span className="text-red">✓</span> 5 comprehensive modules with Master Kaoru</p>
              <p className="text-lg"><span className="text-red">✓</span> Video instruction in flowing, meditative technique</p>
              <p className="text-lg"><span className="text-red">✓</span> Practice exercises & downloadable guides</p>
              <p className="text-lg"><span className="text-red">✓</span> Complete Materials Guide ($27 value)</p>
              <p className="text-lg"><span className="text-red">✓</span> Start With What You Have - pen & paper method ($37 value)</p>
              <p className="text-lg"><span className="text-red">✓</span> Kanji Meaning Library - 100+ characters ($47 value)</p>
            </div>

            <div className="border-t border-charcoal/10 pt-6 mt-6">
              <p className="text-2xl font-light text-center mb-4">Total Value: <span className="line-through text-charcoal/60">$352</span></p>
              <div className="text-center">
                <p className="text-lg mb-2">Regular Price: <span className="line-through">$97</span></p>
                <p className="text-5xl font-light text-red mb-4">$47</p>
                <p className="text-sm text-charcoal/60">For founding students only</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <StripeButton />
          </div>

          <div className="bg-cream/50 rounded-lg p-8 text-center space-y-4">
            <h3 className="text-2xl font-light">30-Day Money-Back Guarantee</h3>
            <p className="text-charcoal/80 leading-relaxed">
              Take the full course. Practice for 30 days. If you don't find shodo meditative, therapeutic, or rewarding—if it doesn't give you what we promised—email us. Full refund. No questions.
            </p>
            <p className="font-medium">
              We're confident because this works. Not because we're good marketers. Because shodo has worked for 500 years.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            What Students Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-warmGray/30 rounded-lg p-8 space-y-4">
              <p className="text-lg font-medium">"I haven't felt this present in years"</p>
              <p className="text-charcoal/80">
                "I bought this thinking I'd learn 'Japanese handwriting.' What I got was meditation that actually works. My therapist asked what changed."
              </p>
              <p className="text-sm text-charcoal/60">— Rachel T., Portland</p>
            </div>

            <div className="bg-warmGray/30 rounded-lg p-8 space-y-4">
              <p className="text-lg font-medium">"Finally, a hobby that isn't a screen"</p>
              <p className="text-charcoal/80">
                "I'm a software engineer. I spend 12 hours a day on computers. Shodo is the only thing that truly disconnects me. It's therapy without talking."
              </p>
              <p className="text-sm text-charcoal/60">— James K., Austin</p>
            </div>

            <div className="bg-warmGray/30 rounded-lg p-8 space-y-4">
              <p className="text-lg font-medium">"My terrible handwriting doesn't matter"</p>
              <p className="text-charcoal/80">
                "I was worried my handwriting was too messy. Master Kaoru teaches you that 'messy' IS your style. Now I have three framed pieces in my apartment. People ask where I bought them."
              </p>
              <p className="text-sm text-charcoal/60">— Lin M., Toronto</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-warmGray/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Common Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-cream rounded-lg p-6 cursor-pointer">
              <summary className="font-medium text-lg">
                I have terrible handwriting. Can I really do this?
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                Yes. Shodo isn't about neat handwriting—it's about expression. Your "messy" strokes have personality that perfect ones don't. Master Kaoru teaches you to embrace your natural hand, not fight it.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6 cursor-pointer">
              <summary className="font-medium text-lg">
                Do I need to buy expensive materials?
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                No. The Materials Guide shows you exactly what to buy for ~$30 on Amazon. Or start with just a pen and paper (Bonus #2) and upgrade to a brush when you're ready.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6 cursor-pointer">
              <summary className="font-medium text-lg">
                What if I don't know any Japanese?
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                You don't need to. The course includes a Kanji Meaning Library with pronunciations and cultural context. You'll learn what you're writing and why it matters.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6 cursor-pointer">
              <summary className="font-medium text-lg">
                Is this cultural appropriation?
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                Master Kaoru's words: "Art doesn't belong to one culture. It belongs to anyone willing to practice with respect. If you honor the tradition, you're welcome."
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6 cursor-pointer">
              <summary className="font-medium text-lg">
                I don't have time for another hobby.
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                Shodo takes as much time as you give it. 10 minutes of focused practice is more valuable than an hour of distracted scrolling. It's not about hours—it's about presence.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6 cursor-pointer">
              <summary className="font-medium text-lg">
                What if I'm not artistic?
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                Neither were most of Master Kaoru's students. Shodo doesn't require artistic talent. It requires willingness to be present with a brush. The rest comes with practice.
              </p>
            </details>

            <details className="bg-cream rounded-lg p-6 cursor-pointer">
              <summary className="font-medium text-lg">
                What's the refund policy?
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                30 days, full refund, no questions asked. Try the course. If it's not for you, email us.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
            "For 40 years, I have watched students discover something they didn't know they were missing. Not perfect letters. Not wall art. But presence. The ability to be here, now, with nothing but breath and ink. This is what we've lost. This is what shodo returns."
          </p>
          <p className="text-lg text-charcoal/70">
            — Master Kaoru Tanaka
            <br />
            Kamakura, Japan
          </p>

          <div className="pt-8">
            <StripeButtonAlt />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal text-cream/60 text-center text-sm">
        <p>© 2025 Japanese Calligraphy School. All rights reserved.</p>
      </footer>
    </main>
  );
}
