import { Footer, Navbar } from '../components';

import { About, Explore, GetStarted, Hero, Insights, WhatsNew, World, WhatsNew1, GetStarted1, GetStarted2, Video } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Video />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
      <div className="gradient-03 z-0" />
      <GetStarted1 />
      <WhatsNew1 />
      <GetStarted2 />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />

    </div>
    <Footer />
  </div>
);

export default Page;
