import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Bot, LineChart } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    let gsap, ScrollTrigger;
    let ctx;
    (async () => {
      try {
        const mod = await import('https://esm.sh/gsap@3');
        const st = await import('https://esm.sh/gsap@3/ScrollTrigger');
        gsap = mod.gsap || mod.default || mod;
        ScrollTrigger = st.ScrollTrigger || st.default || st;
        if (gsap && ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
          ctx = gsap.context(() => {
            gsap.from(titleRef.current, { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.1 });
            gsap.from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.25 });
            gsap.from(ctaRef.current, { y: 16, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.4 });
          });
        }
      } catch (e) {
        // fail silently if CDN blocked
      }
    })();
    return () => ctx && ctx.revert && ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/0" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 pt-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-rose-500 to-rose-700" />
            <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>NovaLabs</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#solutions" className="text-sm text-slate-700 hover:text-slate-950">Solutions</a>
            <a href="#work" className="text-sm text-slate-700 hover:text-slate-950">Work</a>
            <a href="#services" className="text-sm text-slate-700 hover:text-slate-950">Services</a>
            <a href="#contact" className="text-sm text-slate-700 hover:text-slate-950">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800">Start a Project</a>
        </header>

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 ref={titleRef} className="text-4xl font-bold leading-[1.05] text-slate-950 md:text-6xl" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>
              Web Development and AI Automation that moves the needle
            </h1>
            <p ref={subtitleRef} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              We build blazing-fast sites and intelligent workflows that turn complexity into growth. From modern frontends to GPT-powered automations, we deliver measurable business outcomes.
            </p>
            <div ref={ctaRef} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#solutions" className="rounded-full bg-rose-600 px-5 py-3 text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-700">
                Explore Solutions
              </a>
              <a href="#work" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-900 transition hover:border-slate-400">
                See Our Work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-left md:mt-14 md:gap-6">
              <Stat icon={<Rocket className="h-5 w-5 text-rose-600" />} title="Launch faster" desc="Weeks to live, not months." />
              <Stat icon={<Bot className="h-5 w-5 text-rose-600" />} title="Automate ops" desc="Save 100s of hours." />
              <Stat icon={<LineChart className="h-5 w-5 text-rose-600" />} title="Grow revenue" desc="Outcomes you can track." />
            </div>
          </div>
        </div>
      </div>

      <Ornaments />
    </section>
  );
}

function Stat({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/60 bg-white/70 p-4 backdrop-blur-md">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 ring-1 ring-rose-100">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-slate-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{title}</p>
        <p className="text-xs text-slate-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{desc}</p>
      </div>
    </div>
  );
}

function Ornaments() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[0]">
      <svg className="absolute -left-24 top-20 h-64 w-64 opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#grad1)" />
      </svg>
      <svg className="absolute -right-24 bottom-8 h-72 w-72 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="150" height="150" rx="24" fill="#0f172a" />
      </svg>
    </div>
  );
}
