import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Location } from './components/Location';
import { OurWork } from './components/OurWork';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <OurWork />
      <Team />
      <Location />
      <CallToAction />
      <Footer />
    </div>
  );
}
