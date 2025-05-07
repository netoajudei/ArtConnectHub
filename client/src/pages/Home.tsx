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
import { useAuth } from "@/hooks/use-auth-context";

export default function Home() {
  const { user, logout } = useAuth();
  
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

  // Função para fazer logout
  const handleLogout = () => {
    logout();
    window.location.href = "/auth";
  };

  return (
    <div className="bg-white font-body">
      <Header />
      
      {/* Botão de teste para logout (apenas para desenvolvimento) */}
      {user && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-red-600 transition-colors"
          >
            Fazer Logout (Teste)
          </button>
        </div>
      )}
      
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
