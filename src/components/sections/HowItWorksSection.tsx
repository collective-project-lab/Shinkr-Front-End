const steps = [
  {
    title: 'Paste a long URL',
    description: 'Provide the original link you want to shorten.'
  },
  {
    title: 'Generate a short code',
    description: 'Our API returns a unique short URL instantly.'
  },
  {
    title: 'Share and track clicks',
    description: 'Redirects count each click automatically.'
  }
]

const HowItWorksSection = () => (
  <section className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-50px_rgba(79,70,229,0.45)] backdrop-blur-xl">
    <div className="space-y-6">
      <div className="rounded-3xl bg-slate-950/90 p-6 shadow-inner shadow-slate-950/40">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-400">How it works</p>
        <div className="mt-6 space-y-4 text-slate-300">
          {steps.map((step) => (
            <div key={step.title}>
              <p className="font-semibold text-white">{step.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default HowItWorksSection
