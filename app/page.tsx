import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ProductShowcase />
      <ComingSoon />
      <Footer />
    </main>
  );
}
