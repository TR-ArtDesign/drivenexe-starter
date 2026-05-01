import Hero from '../components/Hero.jsx';
import WhyExists from '../components/WhyExists.jsx';
import WhatYouGet from '../components/WhatYouGet.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Difference from '../components/Difference.jsx';

export default function Home({ t }) {
  return (
    <>
      <Hero t={t.hero} />
      <WhyExists t={t.why} />
      <WhatYouGet t={t.features} />
      <HowItWorks t={t.workflow} />
      <Difference t={t.difference} />
    </>
  );
}
