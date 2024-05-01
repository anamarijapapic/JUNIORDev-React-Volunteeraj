import { useRef } from 'react';
import Hero from './home/Hero';
import SocialProofNumbers from './home/SocialProofNumbers';
import Features from './home/Features';
import Mission from './home/Mission';
import Team from './home/Team';
import Partners from './home/Partners';

const Home = () => {
  const exploreRef = useRef(null);

  return (
    <>
      <Hero exploreRef={exploreRef} />
      <SocialProofNumbers activities={123} organizations={12} volunteers={34} />
      <Features exploreRef={exploreRef} />
      <Mission />
      <Team />
      <Partners />
    </>
  );
};

export default Home;
