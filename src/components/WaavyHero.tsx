import { useState, lazy, Suspense } from 'react';
import { Zap, ShieldCheck, Flame, ArrowRight } from 'lucide-react';

// Vite equivalent of Next.js `dynamic(() => import(...), { ssr: false })`
// lazy() + Suspense gives the same code-split, no-SSR behaviour.
const CanScene = lazy(() => import('./CanScene'));

const FLAVORS = [
  { id: 'surge',  name: 'Electric Surge', color: '#00f5d4', desc: 'Blue Raspberry & Citrus Shock' },
  { id: 'plasma', name: 'Plasma Punch',   color: '#ff007f', desc: 'Dragonfruit & Hibiscus Fuel'  },
  { id: 'aurora', name: 'Aurora Lime',    color: '#39ff14', desc: 'Crisp Yuzu & Botanical Herbs'  },
];

function CanSpinner() {
  return (
    <div className="w-full h-[500px] md:h-[650px] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function WaavyHero() {
  const [flavor, setFlavor] = useState(FLAVORS[0]);

  return (
    <section className="relative min-h-screen bg-[#07080d] text-white overflow-hidden flex flex-col justify-between">
      {/* Background Neon Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: flavor.color }}
      />

      {/* Navbar */}
      <header className="relative z-10 max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          waavy<span className="text-cyan-400">.</span>
        </span>
        <button
          type="button"
          className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all"
        >
          Order 12-Pack
        </button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center w-full my-auto py-12 gap-12">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <Zap className="w-3.5 h-3.5" /> Zero Sugar • 200mg Natural Caffeine
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Ride the <br />
            <span
              className="bg-clip-text text-transparent transition-colors duration-500"
              style={{
                backgroundImage: `linear-gradient(90deg, #fff 0%, ${flavor.color} 100%)`,
              }}
            >
              Surge.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-md font-light leading-relaxed">
            Clean cognitive performance engineered for hyper-focus. Infused with
            nootropics, L-theanine, and zero crash.
          </p>

          {/* Flavor Switcher */}
          <div className="pt-2">
            <p className="text-xs uppercase font-bold tracking-widest text-zinc-500 mb-3">
              Select Flavor
            </p>
            <div className="flex gap-3 flex-wrap">
              {FLAVORS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFlavor(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                    flavor.id === f.id
                      ? 'border-white bg-white/10 text-white shadow-lg'
                      : 'border-white/10 text-zinc-400 hover:border-white/30'
                  }`}
                >
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full mr-2"
                    style={{ backgroundColor: f.color }}
                  />
                  {f.name}
                </button>
              ))}
            </div>
            <p className="text-xs text-zinc-400 mt-2 italic">{flavor.desc}</p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              className="px-8 py-4 rounded-full font-bold text-black flex items-center gap-2 transition-transform hover:scale-105"
              style={{ backgroundColor: flavor.color }}
            >
              Pre-Order Now <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-sm text-zinc-400 font-medium">\$34.99 / 12 Cans</span>
          </div>
        </div>

        {/* 3D Scene Viewport */}
        <div className="relative flex justify-center">
          <Suspense fallback={<CanSpinner />}>
            <CanScene activeColor={flavor.color} />
          </Suspense>
        </div>
      </div>

      {/* Footer Benefits Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 text-center text-xs sm:text-sm text-zinc-400 font-medium">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" /> Pure Nootropic Matrix
          </div>
          <div className="flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-cyan-400" /> Fast-Acting Hydration
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" /> Zero Crash Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}

