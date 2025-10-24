import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-24 border-t border-slate-200 bg-white/80">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-white" />
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-950" style={{ fontFamily: 'Fredoka, Inter, system-ui, sans-serif' }}>Let’s build what’s next</h3>
            <p className="mt-2 max-w-xl text-slate-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Tell us about your goals. We’ll propose a lean path to value—no fluff, just outcomes.</p>
          </div>
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:w-auto">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 md:flex-row">
              <input type="email" required placeholder="you@company.com" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-rose-200 focus:border-rose-400 focus:ring" />
              <button className="rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800">Request proposal</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 text-sm text-slate-600 md:flex-row" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-rose-500 to-rose-700" />
            <span>NovaLabs</span>
            <span className="text-slate-400">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
