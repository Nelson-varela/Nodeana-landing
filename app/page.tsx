import { ContactForm } from '@/components/ContactForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
