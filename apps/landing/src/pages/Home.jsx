import Hero from '../components/Hero.jsx';
import WhyExists from '../components/WhyExists.jsx';
import WhatYouGet from '../components/WhatYouGet.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Difference from '../components/Difference.jsx';
import { SEO } from '../components/SEO';

export default function Home({ t }) {
  return (
    <>
      <SEO title="Stop starting from scratch." description="DrivenEXE provides a solid, validated foundation for your projects." />
      <Hero t={t.pages.home.hero} />
      <WhyExists t={t.pages.home.why} />
      <WhatYouGet t={t.pages.features} />
      <HowItWorks t={t.pages.workflow} />
      <Difference t={t.difference} />
    </>
  );
}
