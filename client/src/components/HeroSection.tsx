import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 comic-dots bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 z-10">
          <motion.div 
            className="pow-bubble mb-6 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Bangers'] text-2xl text-primary">SUPER NOVIDADE!</h2>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-['Bangers'] text-[#1A1A2E] leading-tight mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-primary">O Herói do Seu Bolso</span> 
            <br />e do Seu <span className="text-secondary">Tempo!</span>
          </motion.h1>
          
          <motion.div 
            className="speech-bubble p-4 mb-8 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="font-['Comic_Neue'] text-xl">
              Economize tempo e dinheiro nas compras do seu estabelecimento com nosso app de cotação de alimentos. Rápido como um super-herói!
            </p>
          </motion.div>
          
          <motion.button 
            className="comic-border bg-primary hover:bg-red-600 text-white font-['Bangers'] text-2xl px-8 py-3 rounded-lg transform hover:scale-105 transition duration-300 shadow-[5px_5px_0px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            COMEÇAR AGORA <i className="fas fa-bolt ml-2"></i>
          </motion.button>
          
          <motion.p 
            className="mt-3 text-sm font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            É 100% GRÁTIS para estabelecimentos!
          </motion.p>
        </div>
        
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
          <motion.div 
            className="relative z-10 transform rotate-6"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="comic-border bg-white inline-block p-3">
              <svg className="w-full max-w-md mx-auto" viewBox="0 0 400 400">
                <g id="superhero-shopping-list">
                  <rect width="380" height="380" x="10" y="10" rx="10" fill="#FFF" />
                  <path d="M200,50 C130,50 80,120 80,200 C80,280 130,350 200,350 C270,350 320,280 320,200 C320,120 270,50 200,50 Z" fill="#EC0E33" />
                  <path d="M200,70 C140,70 100,130 100,200 C100,270 140,330 200,330 C260,330 300,270 300,200 C300,130 260,70 200,70 Z" fill="#FFF" />
                  <path d="M200,90 C150,90 120,140 120,200 C120,260 150,310 200,310 C250,310 280,260 280,200 C280,140 250,90 200,90 Z" fill="#EC0E33" />
                  <path d="M190,150 L210,150 L215,250 L185,250 Z" fill="#FAB515" />
                  <path d="M160,120 L240,120 L230,150 L170,150 Z" fill="#FAB515" />
                  <circle cx="200" cy="100" r="30" fill="#FAB515" />
                  <path d="M180,180 L220,180 L220,230 L180,230 Z" fill="#FFF" />
                  <line x1="190" y1="190" x2="210" y2="190" stroke="#000" strokeWidth="3" />
                  <line x1="190" y1="200" x2="210" y2="200" stroke="#000" strokeWidth="3" />
                  <line x1="190" y1="210" x2="210" y2="210" stroke="#000" strokeWidth="3" />
                  <line x1="190" y1="220" x2="210" y2="220" stroke="#000" strokeWidth="3" />
                  <path d="M150,150 L130,100 L110,150" fill="none" stroke="#FAB515" strokeWidth="10" />
                  <path d="M250,150 L270,100 L290,150" fill="none" stroke="#FAB515" strokeWidth="10" />
                </g>
              </svg>
              <div className="speech-bubble absolute -top-10 -right-5 p-3 transform -rotate-12">
                <p className="font-['Comic_Neue'] font-bold text-primary">ECONOMIA EM SUPER VELOCIDADE!</p>
              </div>
            </div>
          </motion.div>
          <div className="absolute top-0 right-0 w-full h-full speed-lines opacity-20 z-0"></div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path fill="#EC0E33" d="M1200 120L0 16.48V0h1200v120z"></path>
        </svg>
      </div>
    </section>
  );
}
