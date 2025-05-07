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
          
          <motion.a 
            href="/auth"
            className="inline-block comic-border bg-primary hover:bg-red-600 text-white font-['Bangers'] text-2xl px-8 py-3 rounded-lg transform hover:scale-105 transition duration-300 shadow-[5px_5px_0px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            COMEÇAR AGORA <i className="fas fa-bolt ml-2"></i>
          </motion.a>
          
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
              <img 
                src="/attached_assets/hero-image.png" 
                alt="Super Lista App" 
                className="w-full max-w-md mx-auto"
              />
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
