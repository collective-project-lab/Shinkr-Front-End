export interface ShortenResponse {
  short_code: string
  short_url: string
}

export async function createShortUrl(longUrl: string): Promise<ShortenResponse> {
  const response = await fetch('https://faresedris123.pythonanywhere.com/api/urls/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ long_url: longUrl })
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error || 'Failed to shorten URL')
  }

  return response.json()
}
