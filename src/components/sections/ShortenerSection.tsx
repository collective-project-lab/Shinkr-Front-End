import { type FormEvent } from 'react'

interface ShortenerSectionProps {
  longUrl: string
  onUrlChange: (url: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
  shortUrl: string

  copied: boolean
  onCopy: () => void
}

const ShortenerSection = ({
  longUrl,
  onUrlChange,
  onSubmit,
  status,
  message,
  shortUrl,

  copied,
  onCopy
}: ShortenerSectionProps) => {
  return (
    <section className="relative flex flex-col items-center justify-center rounded-[40px] border border-white/10 bg-white/5 p-8 sm:p-12 shadow-[0_40px_120px_-50px_rgba(170,59,255,0.45)] backdrop-blur-xl transition-all duration-300">
      
      {/* Decorative blurred blob behind the section */}
      <div className="absolute -z-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="w-full max-w-2xl text-center space-y-6 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent pb-2">
          Shorten Your Links.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto">
          Paste your long URL below to create a concise, shareable link instantly.
        </p>
        
        <form onSubmit={onSubmit} className="relative flex flex-col sm:flex-row gap-4 mt-10">
          <input
            type="url"
            value={longUrl}
            onChange={(e) => onUrlChange(e.target.value)}
            placeholder="https://your-long-url.com/very-long-path"
            required
            className="w-full flex-1 rounded-2xl border border-white/10 bg-slate-950/60 px-6 py-4 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || !longUrl}
            className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/50 focus:outline-none active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Shorten It'
            )}
          </button>
        </form>

        {status === 'error' && (
          <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium animate-pulse">
            {message}
          </div>
        )}

        {status === 'success' && shortUrl && (
          <div className="mt-8 rounded-2xl border border-indigo-500/30 bg-slate-950/80 p-2 backdrop-blur-md shadow-lg shadow-indigo-500/20 transform transition-all duration-500 hover:border-indigo-400/50">
            <div className="flex items-center justify-between gap-4 p-2 pl-4">
              <div className="truncate text-left flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300/70 mb-1">Your shortened link</p>
                <a 
                  href={shortUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white font-medium hover:text-indigo-200 transition-colors truncate block text-lg sm:text-xl"
                >
                  {shortUrl}
                </a>
              </div>
              <button
                onClick={onCopy}
                className={`relative flex-shrink-0 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 ${
                  copied
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ShortenerSection
