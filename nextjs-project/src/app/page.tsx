'use client'

import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RevenueModelSection from "@/components/RevenueModelSection";
import AboutUsSection from "@/components/AboutUsSection";
import PartnerCTASection from "@/components/PartnerCTASection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  // Animation for flash-in elements when in viewport
  useEffect(() => {
    const handleScroll = () => {
      const flashInElements = document.querySelectorAll('.flash-in');
      
      flashInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInViewport = (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
        );
        
        if (isInViewport) {
          (element as HTMLElement).style.opacity = '1';
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white font-body">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <RevenueModelSection />
      <AboutUsSection />
      <PartnerCTASection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
