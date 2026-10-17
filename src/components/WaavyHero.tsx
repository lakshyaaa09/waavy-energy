import { ArrowRight, Zap, ShieldCheck, Flame } from 'lucide-react';

export default function WaavyHero() {
  return (
    <section className="relative min-h-screen bg-white text-zinc-900 overflow-hidden flex flex-col justify-between">
      {/* Sticky Glassmorphic Header */}
      <header className="relative z-20 max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between border-b border-zinc-200/60 backdrop-blur-md">
        <span className="text-2xl font-black tracking-tight text-sky-600">
          waavy.
        </span>
        <button
          type="button"
          className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-500 text-white hover:bg-sky-600 transition-all shadow-md hover:shadow-sky-200"
        >
          Order 12-Pack
        </button>
      </header>

      {/* Main Hero with Centered Animated Logo Video */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center my-auto py-10">

        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold uppercase tracking-widest text-sky-600 mb-6">
          <Zap className="w-3.5 h-3.5" /> Next-Gen Hydration & Clean Energy
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-2xl aspect-[16/9] flex items-center justify-center overflow-hidden rounded-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain pointer-events-none"
          >
            <source src="waavy-logo.webm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Subtitle & Value Proposition */}
        <p className="text-zinc-600 text-lg sm:text-xl max-w-xl font-normal leading-relaxed mt-4">
          Ride the surge. Zero sugar, nootropics, and smooth sustained focus designed for modern motion.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <button
            type="button"
            className="px-8 py-4 rounded-full font-bold text-white bg-sky-500 hover:bg-sky-600 flex items-center gap-2 shadow-lg shadow-sky-200 hover:scale-105 transition-all"
          >
            Pre-Order Now <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="px-8 py-4 rounded-full font-bold text-zinc-700 border border-zinc-200 hover:bg-zinc-50 transition-all"
          >
            Explore Flavors
          </button>
        </div>
      </div>

      {/* Bottom Feature Badges */}
      <div className="relative z-10 border-t border-zinc-100 bg-zinc-50/70 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs sm:text-sm text-zinc-600 font-medium">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-500" /> Pure Nootropic Matrix
          </div>
          <div className="flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-sky-500" /> Fast-Acting Hydration
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-sky-500" /> Zero Crash Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
