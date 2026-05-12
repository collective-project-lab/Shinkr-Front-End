

import { type FormEvent, useState } from 'react'
import './App.css'
import { createShortUrl } from './components/BackEndPortal'
import HighlightsSection from './components/sections/HighlightsSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import ShortenerSection from './components/sections/ShortenerSection'

function App() {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [, setShortCode] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('')
    setShortUrl('')
    setShortCode('')

    if (!longUrl.trim()) {
      setStatus('error')
      setMessage('Please enter a valid URL.')
      return
    }

    setStatus('loading')

    try {
      const data = await createShortUrl(longUrl.trim())
      setShortUrl(data.short_url)
      setShortCode(data.short_code)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to connect to the backend. Please try again later.')
    }
  }

  const handleCopy = async () => {
    if (!shortUrl) return
    await navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <section className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <ShortenerSection
            longUrl={longUrl}
            onUrlChange={setLongUrl}
            onSubmit={handleSubmit}
            status={status}
            message={message}
            shortUrl={shortUrl}
            copied={copied}
            onCopy={handleCopy}
          />
          <HowItWorksSection />
        </section>

        <HighlightsSection />
      </div>
    </main>
  )
}

export default App
