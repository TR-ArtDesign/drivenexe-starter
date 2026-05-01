import Hero from '../components/Hero.jsx';
import WhyExists from '../components/WhyExists.jsx';
import WhatYouGet from '../components/WhatYouGet.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Difference from '../components/Difference.jsx';

export default function Home({ t }) {
  return (
    <>
      <Hero t={t.pages.home.hero} />
      <WhyExists t={t.pages.home.why} />
      <WhatYouGet t={t.pages.features} />
      <HowItWorks t={t.pages.workflow} />
      <Difference t={t.difference} />
    </>
  );
}
