import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
const HeroSection = lazy(() => import('@/components/HeroSection'));
const SocialProofSection = lazy(() => import('@/components/SocialProofSection'));
const FeaturesSection = lazy(() => import('@/components/FeaturesSection'));
const HowItWorksSection = lazy(() => import('@/components/HowItWorksSection'));
const PromptToRoomDemo = lazy(() => import('@/components/PromptToRoomDemo'));
const ProductDemoSection = lazy(() => import('@/components/ProductDemoSection'));
const BreakdownDemo = lazy(() => import('@/components/BreakdownDemo'));
const MarketSection = lazy(() => import('@/components/MarketSection'));
const VisionSection = lazy(() => import('@/components/VisionSection'));
const Phase2Section = lazy(() => import('@/components/Phase2Section'));
const WaitlistSection = lazy(() => import('@/components/WaitlistSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const Footer = lazy(() => import('@/components/Footer'));
const BackToTop = lazy(() => import('@/components/BackToTop'));
import { ParallaxFloat } from '@/components/ParallaxSection';

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden relative">
      {/* Parallax background decorations */}
      <ParallaxFloat speed={0.3} className="top-[800px] left-10 w-72 h-72 -z-10">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
      </ParallaxFloat>
      <ParallaxFloat speed={-0.2} className="top-[1500px] right-10 w-96 h-96 -z-10">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-copper/5 to-transparent blur-3xl" />
      </ParallaxFloat>
      <ParallaxFloat speed={0.4} className="top-[2500px] left-1/4 w-80 h-80 -z-10">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-light/5 to-transparent blur-3xl" />
      </ParallaxFloat>
      <ParallaxFloat speed={-0.3} className="top-[3500px] right-1/4 w-64 h-64 -z-10">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
      </ParallaxFloat>
      <ParallaxFloat speed={0.25} className="top-[4500px] left-20 w-96 h-96 -z-10">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-copper/5 to-transparent blur-3xl" />
      </ParallaxFloat>

      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PromptToRoomDemo />
        <ProductDemoSection />
        <BreakdownDemo />
        <MarketSection />
        <VisionSection />

        {/* Phase 2 Coming Soon Teaser with animation */}
        <div className="relative w-full flex justify-center items-center mt-16 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="bg-gradient-to-r from-copper/10 via-primary/10 to-teal-light/10 rounded-xl px-6 py-4 shadow-lg border border-copper/30">
              <span className="font-display text-2xl md:text-3xl font-bold text-copper mr-2">Phase 2: Execution Intelligence</span>
              <span className="font-body text-lg text-muted-foreground font-medium">— Coming Soon</span>
            </div>
          </motion.div>
        </div>

        <Phase2Section />
        <WaitlistSection />
        <FAQSection />
        <Footer />
        <BackToTop />
      </Suspense>
    </main>
  );
};

export default Index;
