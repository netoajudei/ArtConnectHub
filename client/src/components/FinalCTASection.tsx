import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="bg-white pt-16 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="pow-bubble inline-block mb-8 py-3 px-8"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: -2 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Bangers'] text-4xl text-primary">ECONOMIZE COMO UM SUPER-HERÓI!</h2>
          </motion.div>
          
          <motion.div 
            className="speech-bubble bg-white p-6 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="font-['Comic_Neue'] text-xl">
              Junte-se a centenas de estabelecimentos que já estão economizando tempo e dinheiro 
              com a Super Lista. É 100% GRÁTIS e leva apenas 2 minutos para começar!
            </p>
          </motion.div>
          
          <motion.a 
            href="http://superlista.flutterflow.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block comic-border bg-primary hover:bg-red-600 text-white font-['Bangers'] text-3xl px-10 py-4 rounded-lg transform hover:scale-105 transition duration-300 shadow-[5px_5px_0px_rgba(0,0,0,0.5)] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            COMEÇAR AGORA <i className="fas fa-bolt ml-2"></i>
          </motion.a>
          
          <motion.p 
            className="font-['Comic_Neue'] font-bold text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Disponível para Android e iOS
          </motion.p>
          
          <motion.div 
            className="flex justify-center mt-4 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-block">
              <svg className="h-12 comic-border" viewBox="0 0 150 50">
                <rect width="150" height="50" rx="5" fill="#000" />
                <g transform="translate(25, 10)">
                  <path d="M17,25 L7,15 L17,5" fill="none" stroke="#fff" strokeWidth="2" />
                  <circle cx="20" cy="15" r="7" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M43,15 A8,8 0 1,0 43,25" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M55,5 L55,21 A4,4 0 0,0 63,21 L63,5" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M75,5 L75,25" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M70,15 L80,15" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M90,5 A10,10 0 1,0 90,25" fill="none" stroke="#fff" strokeWidth="2" />
                </g>
                <text x="75" y="35" textAnchor="middle" fill="#fff" fontSize="8">App Store</text>
              </svg>
            </a>
            <a href="#" className="inline-block">
              <svg className="h-12 comic-border" viewBox="0 0 150 50">
                <rect width="150" height="50" rx="5" fill="#000" />
                <polygon points="30,10 30,40 50,25" fill="#fff" />
                <g transform="translate(60, 10)">
                  <path d="M0,0 L0,30 A15,15 0 0,0 30,15 A15,15 0 0,0 0,0" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M40,0 L40,30" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M50,0 A15,15 0 0,1 50,30" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M70,0 L70,30" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M70,0 L85,30" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M70,30 L85,0" fill="none" stroke="#fff" strokeWidth="2" />
                </g>
                <text x="75" y="35" textAnchor="middle" fill="#fff" fontSize="8">Google Play</text>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 speed-lines h-32 opacity-20"></div>
      
      <div className="absolute -bottom-10 -left-10 w-32 h-32 pow-bubble flex items-center justify-center">
        <p className="font-['Bangers'] text-3xl text-primary transform rotate-12">ZAP!</p>
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-32 h-32 pow-bubble flex items-center justify-center">
        <p className="font-['Bangers'] text-3xl text-primary transform -rotate-12">BOOM!</p>
      </div>
    </section>
  );
}
