import { AutomationProducts } from '@/components/AutomationProducts';
import { ContactForm } from '@/components/ContactForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { PainPoint } from '@/components/PainPoint';
import { Process } from '@/components/Process';
import { Results } from '@/components/Results';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AutomationProducts />
      <PainPoint />
      <Services />
      <Results />
      <Process />
      <TechStack />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
