import React from 'react';
import { Card } from '../ui/Card';

const FeatureSection = () => (
  <section className="feature-section">
    <Card title="Fast setup" description="Start building with minimal configuration." />
    <Card title="Responsive" description="Designed for every screen size." />
    <Card title="Modern" description="Built with React and Vite." />
  </section>
);

export default FeatureSection;
