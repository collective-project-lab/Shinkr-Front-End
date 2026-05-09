import { Card } from '../ui/Card'

const features = [
  {
    title: 'Generate short links',
    description: 'Paste a long URL and get a shareable short URL instantly from the API.'
  },
  {
    title: 'View existing links',
    description: 'The app can list all shortened URLs from the backend using the API endpoint.'
  },
  {
    title: 'Send traffic to original URLs',
    description: 'Each redirect increments click count automatically on the backend.'
  }
]

const HighlightsSection = () => (
  <section className="grid gap-6 md:grid-cols-3">
    {features.map((feature) => (
      <Card
        key={feature.title}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </section>
)

export default HighlightsSection
