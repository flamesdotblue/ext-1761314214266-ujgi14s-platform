import React, { useEffect, useRef } from 'react';

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    let gsap, ScrollTrigger; let ctx;
    (async () => {
      try {
        const mod = await import('https://esm.sh/gsap@3');
        const st = await import('https://esm.sh/gsap@3/ScrollTrigger');
        gsap = mod.gsap || mod.default || mod;
        ScrollTrigger = st.ScrollTrigger || st.default || st;
        if (gsap && ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
          ctx = gsap.context(() => {
            gsap.utils.toArray('[data-svc]').forEach((el, i) => {
              gsap.from(el, {
                opacity: 0,
                y: 20,
                duration: 0.7,
                ease: 'power2.out',
                delay: i * 0.05,
                scrollTrigger: { trigger: el, start: 'top 85%' }
              });
            });
          }, ref);
        }
      } catch (e) {}
    })();
    return () => ctx && ctx.revert && ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="relative mx-auto my-20 w-full max-w-7xl px-6 md:my-28">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-950 md:text-4xl" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>Services that convert ideas into outcomes</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Engagements tailored to your stage—from greenfield builds to automation sprints and ongoing growth.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ServiceCard title="Foundations Sprint" points={[
          'Technical strategy & KPIs',
          'Design system & component library',
          'CI/CD, analytics, observability'
        ]} />
        <ServiceCard title="AI Automation Sprint" points={[
          'Workflow mapping & agent design',
          'RAG pipelines & data governance',
          'Human-in-the-loop QA'
        ]} />
        <ServiceCard title="Growth Retainer" points={[
          'A/B testing & CRO',
          'Feature delivery & maintenance',
          'Performance & SEO enhancements'
        ]} />
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-rose-50/60 p-6 shadow-sm md:flex-row md:p-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-950" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>Ready to automate the busywork?</h3>
          <p className="mt-1 text-slate-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>We’ll map your processes and deploy reliable LLM agents with measurable impact.</p>
        </div>
        <a href="#contact" className="rounded-full bg-rose-600 px-5 py-3 text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-700">Book a discovery call</a>
      </div>
    </section>
  );
}

function ServiceCard({ title, points }) {
  return (
    <div data-svc className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>{title}</h3>
      <ul className="mt-4 space-y-2 text-slate-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-rose-600" />{p}</li>
        ))}
      </ul>
    </div>
  );
}
