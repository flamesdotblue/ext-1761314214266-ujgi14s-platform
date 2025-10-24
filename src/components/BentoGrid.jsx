import React, { useEffect, useRef } from 'react';
import { Rocket, Cpu, Zap, Grid, Shield, Wand2 } from 'lucide-react';

export default function BentoGrid() {
  const sectionRef = useRef(null);

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
            const cards = sectionRef.current.querySelectorAll('[data-animate="card"]');
            cards.forEach((el, i) => {
              gsap.from(el, {
                opacity: 0,
                y: 24,
                rotateX: 6,
                transformOrigin: 'top center',
                duration: 0.8,
                ease: 'power3.out',
                delay: i * 0.06,
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%'
                }
              });
            });
          }, sectionRef);
        }
      } catch (e) {}
    })();
    return () => ctx && ctx.revert && ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="relative z-10 mx-auto my-10 w-full max-w-7xl px-6 md:my-16">
      <div className="mb-8 flex items-end justify-between md:mb-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>Bento of High-Impact Outcomes</h2>
          <p className="mt-2 max-w-2xl text-slate-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>A modular system of services designed to compound value—launch faster, automate smarter, and scale with confidence.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 md:gap-6">
        <Card className="sm:col-span-4" icon={<Rocket className="h-5 w-5 text-rose-600" />} title="Next-gen Websites" badge="Performance" desc="Modern, accessible, conversion-focused frontends built with React, Vite, and Tailwind. Sub-second interactions, delightful UX.">
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
            <Pill>SEO-ready</Pill>
            <Pill>WCAG AA</Pill>
            <Pill>Design Systems</Pill>
          </div>
        </Card>

        <Card className="sm:col-span-2" icon={<Shield className="h-5 w-5 text-rose-600" />} title="Enterprise-grade" badge="Reliability" desc="Robust infra, security best-practices, and CI/CD baked in for peace of mind." />

        <Card className="sm:col-span-3" icon={<Cpu className="h-5 w-5 text-rose-600" />} title="AI Automations" badge="Efficiency" desc="LLM agents, workflow orchestration, and data pipelines that eliminate busywork.">
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
            <Pill>RAG</Pill>
            <Pill>Agentic Flows</Pill>
            <Pill>Task Queues</Pill>
            <Pill>Monitoring</Pill>
          </div>
        </Card>

        <Card className="sm:col-span-3" icon={<Grid className="h-5 w-5 text-rose-600" />} title="Bento Strategy" badge="Clarity" desc="Workshop to define KPIs, user journeys, and a pragmatic roadmap aligned to business goals." />

        <Card className="sm:col-span-2" icon={<Wand2 className="h-5 w-5 text-rose-600" />} title="Design Systems" badge="Consistency" desc="Reusable components, tokens, and documentation that scale across teams." />

        <Card className="sm:col-span-4" icon={<Zap className="h-5 w-5 text-rose-600" />} title="Integration & Ops" badge="Velocity" desc="APIs, CRMs, webhooks, and data syncs. We make your tools talk so your team moves faster." />
      </div>
    </section>
  );
}

function Card({ icon, title, desc, badge, children, className = '' }) {
  return (
    <div data-animate="card" className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md md:p-6 ${className}`}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-200/40 blur-2xl transition duration-500 group-hover:bg-rose-300/50" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 ring-1 ring-rose-100">{icon}</div>
          <span className="rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-700">{badge}</span>
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-950" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>{title}</h3>
      <p className="mt-2 text-slate-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{desc}</p>
      {children}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-slate-700 shadow-sm">{children}</span>
  );
}
