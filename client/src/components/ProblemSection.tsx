import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section id="problema" className="bg-primary pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="inline-block comic-border bg-white font-['Bangers'] text-4xl text-primary px-8 py-3 transform -rotate-2"
            initial={{ rotate: 5 }}
            animate={{ rotate: -2 }}
            transition={{ duration: 0.5 }}
          >
            O PROBLEMA
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem 1 */}
          <motion.div 
            className="comic-border bg-white p-6 hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                <i className="fas fa-clock text-2xl"></i>
              </div>
              <h3 className="font-['Bangers'] text-2xl">Tempo Desperdiçado</h3>
            </div>
            <p className="font-['Comic_Neue']">Proprietários e gerentes perdem horas preciosas ligando para diversos fornecedores, anotando preços e comparando valores manualmente.</p>
            <svg className="w-full mt-4 rounded comic-border" height="200" viewBox="0 0 600 300">
              <rect width="600" height="300" fill="#f8f9fa" />
              <g transform="translate(300, 150)">
                <ellipse cx="0" cy="0" rx="120" ry="80" fill="#EC0E33" opacity="0.1" />
                
                {/* Restaurant owner */}
                <g transform="translate(-70, 0)">
                  <circle cx="0" cy="-50" r="30" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                  <path d="M-15,-55 Q0,-65 15,-55" stroke="#000" strokeWidth="2" fill="none" />
                  <circle cx="-10" cy="-60" r="3" fill="#000" />
                  <circle cx="10" cy="-60" r="3" fill="#000" />
                  <path d="M-10,-40 Q0,-30 10,-40" stroke="#000" strokeWidth="2" fill="none" />
                  <path d="M0,-20 L0,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,0 L-30,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,0 L30,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,30 L-20,80" stroke="#000" strokeWidth="4" />
                  <path d="M0,30 L20,80" stroke="#000" strokeWidth="4" />
                  <rect x="-40" y="-15" width="25" height="15" fill="#4361EE" />
                </g>
                
                {/* Phone and stress symbols */}
                <g transform="translate(-150, -30)">
                  <rect x="0" y="0" width="40" height="60" rx="5" fill="#333" />
                  <rect x="5" y="5" width="30" height="50" rx="2" fill="#666" />
                  <text x="20" y="30" fontSize="10" fill="#fff" textAnchor="middle">?!</text>
                  
                  {/* Stress lines */}
                  <path d="M50,10 L70,-10" stroke="#EC0E33" strokeWidth="3" />
                  <path d="M55,20 L75,0" stroke="#EC0E33" strokeWidth="3" />
                  <path d="M60,30 L80,10" stroke="#EC0E33" strokeWidth="3" />
                </g>
                
                {/* Notepads */}
                <g transform="translate(70, 30)">
                  <rect x="0" y="-80" width="70" height="90" fill="#fff" stroke="#000" strokeWidth="2" transform="rotate(10)" />
                  <line x1="10" y1="-70" x2="60" y2="-70" stroke="#000" strokeWidth="1" transform="rotate(10)" />
                  <line x1="10" y1="-60" x2="60" y2="-60" stroke="#000" strokeWidth="1" transform="rotate(10)" />
                  <line x1="10" y1="-50" x2="60" y2="-50" stroke="#000" strokeWidth="1" transform="rotate(10)" />
                  <line x1="10" y1="-40" x2="60" y2="-40" stroke="#000" strokeWidth="1" transform="rotate(10)" />
                  <line x1="10" y1="-30" x2="60" y2="-30" stroke="#000" strokeWidth="1" transform="rotate(10)" />
                  
                  <rect x="-30" y="-40" width="70" height="90" fill="#fff" stroke="#000" strokeWidth="2" transform="rotate(-5)" />
                  <line x1="-20" y1="-30" x2="30" y2="-30" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                  <line x1="-20" y1="-20" x2="30" y2="-20" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                  <line x1="-20" y1="-10" x2="30" y2="-10" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                  <line x1="-20" y1="0" x2="30" y2="0" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                  <line x1="-20" y1="10" x2="30" y2="10" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                  
                  <rect x="-10" y="0" width="70" height="90" fill="#fff" stroke="#000" strokeWidth="2" transform="rotate(15)" />
                  <line x1="0" y1="10" x2="50" y2="10" stroke="#000" strokeWidth="1" transform="rotate(15)" />
                  <line x1="0" y1="20" x2="50" y2="20" stroke="#000" strokeWidth="1" transform="rotate(15)" />
                  <line x1="0" y1="30" x2="50" y2="30" stroke="#000" strokeWidth="1" transform="rotate(15)" />
                  <line x1="0" y1="40" x2="50" y2="40" stroke="#000" strokeWidth="1" transform="rotate(15)" />
                  <line x1="0" y1="50" x2="50" y2="50" stroke="#000" strokeWidth="1" transform="rotate(15)" />
                </g>
                
                {/* Clock symbol */}
                <g transform="translate(140, -70)">
                  <circle cx="0" cy="0" r="30" fill="#FAB515" stroke="#000" strokeWidth="3" />
                  <line x1="0" y1="0" x2="0" y2="-15" stroke="#000" strokeWidth="3" />
                  <line x1="0" y1="0" x2="15" y2="0" stroke="#000" strokeWidth="3" />
                </g>
              </g>
            </svg>
          </motion.div>
          
          {/* Problem 2 */}
          <motion.div 
            className="comic-border bg-white p-6 hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                <i className="fas fa-list-check text-2xl"></i>
              </div>
              <h3 className="font-['Bangers'] text-2xl">Itens Esquecidos</h3>
            </div>
            <p className="font-['Comic_Neue']">Listas de compras desorganizadas ou comunicação falha entre equipes levam a itens esquecidos e compras de emergência por preços mais altos.</p>
            <svg className="w-full mt-4 rounded comic-border" height="200" viewBox="0 0 600 300">
              <rect width="600" height="300" fill="#f8f9fa" />
              <g transform="translate(300, 150)">
                {/* Chef */}
                <g transform="translate(-80, 0)">
                  <circle cx="0" cy="-50" r="30" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                  <path d="M-20,-70 H20 V-50 H-20 Z" fill="#fff" stroke="#000" strokeWidth="2" />
                  <rect x="-25" y="-90" width="50" height="30" rx="5" fill="#fff" stroke="#000" strokeWidth="2" />
                  <path d="M-15,-55 L-10,-60 L-5,-55" stroke="#000" strokeWidth="2" fill="none" />
                  <path d="M5,-55 L10,-60 L15,-55" stroke="#000" strokeWidth="2" fill="none" />
                  <path d="M-10,-35 Q0,-20 10,-35" stroke="#000" strokeWidth="2" fill="none" />
                  <path d="M0,-20 L0,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,0 L-30,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,0 L30,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,30 L-20,80" stroke="#000" strokeWidth="4" />
                  <path d="M0,30 L20,80" stroke="#000" strokeWidth="4" />
                  <rect x="-40" y="-10" width="80" height="30" fill="#fff" stroke="#000" strokeWidth="2" />
                </g>
                
                {/* Empty shelf */}
                <g transform="translate(100, 0)">
                  <rect x="-150" y="-80" width="300" height="20" fill="#8B4513" stroke="#000" strokeWidth="2" />
                  <rect x="-150" y="-60" width="300" height="5" fill="#A0522D" stroke="#000" strokeWidth="1" />
                  
                  <rect x="-150" y="-30" width="300" height="20" fill="#8B4513" stroke="#000" strokeWidth="2" />
                  <rect x="-150" y="-10" width="300" height="5" fill="#A0522D" stroke="#000" strokeWidth="1" />
                  
                  <rect x="-150" y="20" width="300" height="20" fill="#8B4513" stroke="#000" strokeWidth="2" />
                  <rect x="-150" y="40" width="300" height="5" fill="#A0522D" stroke="#000" strokeWidth="1" />
                  
                  <rect x="-150" y="70" width="300" height="20" fill="#8B4513" stroke="#000" strokeWidth="2" />
                  <rect x="-150" y="90" width="300" height="5" fill="#A0522D" stroke="#000" strokeWidth="1" />
                </g>
                
                {/* Surprise symbols */}
                <g transform="translate(30, -60)">
                  <text x="0" y="0" fontSize="30" fill="#EC0E33" fontWeight="bold">?!</text>
                </g>
                <g transform="translate(80, -40)">
                  <text x="0" y="0" fontSize="25" fill="#EC0E33" fontWeight="bold">?</text>
                </g>
                <g transform="translate(50, -15)">
                  <text x="0" y="0" fontSize="28" fill="#EC0E33" fontWeight="bold">!</text>
                </g>
              </g>
            </svg>
          </motion.div>
          
          {/* Problem 3 */}
          <motion.div 
            className="comic-border bg-white p-6 hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                <i className="fas fa-money-bill-wave text-2xl"></i>
              </div>
              <h3 className="font-['Bangers'] text-2xl">Pagando Demais</h3>
            </div>
            <p className="font-['Comic_Neue']">Sem tempo para pesquisar preços adequadamente, estabelecimentos frequentemente pagam muito mais do que o necessário pelos mesmos produtos.</p>
            <svg className="w-full mt-4 rounded comic-border" height="200" viewBox="0 0 600 300">
              <rect width="600" height="300" fill="#f8f9fa" />
              <g transform="translate(300, 150)">
                {/* Person */}
                <g transform="translate(-120, 0)">
                  <circle cx="0" cy="-50" r="30" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                  <path d="M-15,-60 H-5 V-50 H-15 Z" fill="#fff" stroke="#000" strokeWidth="2" />
                  <path d="M5,-60 H15 V-50 H5 Z" fill="#fff" stroke="#000" strokeWidth="2" />
                  <circle cx="-10" cy="-55" r="2" fill="#000" />
                  <circle cx="10" cy="-55" r="2" fill="#000" />
                  <path d="M-10,-35 Q0,-10 10,-35" stroke="#000" strokeWidth="2" fill="none" />
                  <path d="M0,-20 L0,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,0 L-30,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,0 L30,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,30 L-20,80" stroke="#000" strokeWidth="4" />
                  <path d="M0,30 L20,80" stroke="#000" strokeWidth="4" />
                </g>
                
                {/* Shocked expression */}
                <g transform="translate(-120, -50)">
                  <circle cx="30" cy="0" r="20" fill="#fff" stroke="#000" strokeWidth="2" />
                  <text x="30" y="5" fontSize="20" fill="#000" textAnchor="middle">!</text>
                </g>
                
                {/* Receipt */}
                <g transform="translate(50, 0)">
                  <rect x="-60" y="-80" width="120" height="160" fill="#fff" stroke="#000" strokeWidth="2" />
                  
                  <line x1="-50" y1="-60" x2="50" y2="-60" stroke="#000" strokeWidth="1" />
                  <line x1="-50" y1="-40" x2="50" y2="-40" stroke="#000" strokeWidth="1" />
                  <line x1="-50" y1="-20" x2="50" y2="-20" stroke="#000" strokeWidth="1" />
                  <line x1="-50" y1="0" x2="50" y2="0" stroke="#000" strokeWidth="1" />
                  <line x1="-50" y1="20" x2="50" y2="20" stroke="#000" strokeWidth="1" />
                  <line x1="-50" y1="40" x2="50" y2="40" stroke="#000" strokeWidth="1" />
                  
                  <rect x="-50" y="50" width="100" height="20" fill="#eee" stroke="#000" strokeWidth="1" />
                  <text x="0" y="65" fontSize="16" fill="#EC0E33" fontWeight="bold" textAnchor="middle">R$ 1.500,00</text>
                </g>
                
                {/* Surprise symbols */}
                <g transform="translate(120, -60)">
                  <text x="0" y="0" fontSize="40" fill="#EC0E33" fontWeight="bold">$$$</text>
                </g>
                <g transform="translate(150, -15)">
                  <text x="0" y="0" fontSize="30" fill="#EC0E33" fontWeight="bold">!</text>
                </g>
              </g>
            </svg>
          </motion.div>
          
          {/* Problem 4 */}
          <motion.div 
            className="comic-border bg-white p-6 hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                <i className="fas fa-gears text-2xl"></i>
              </div>
              <h3 className="font-['Bangers'] text-2xl">Processos Ineficientes</h3>
            </div>
            <p className="font-['Comic_Neue']">Métodos ultrapassados de gestão de estoque e compras causam atrasos, erros e impedem o crescimento do seu estabelecimento.</p>
            <svg className="w-full mt-4 rounded comic-border" height="200" viewBox="0 0 600 300">
              <rect width="600" height="300" fill="#f8f9fa" />
              <g transform="translate(300, 150)">
                {/* Person with paperwork */}
                <g transform="translate(-100, 0)">
                  <circle cx="0" cy="-50" r="30" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                  <ellipse cx="-10" cy="-55" rx="3" ry="5" fill="#000" />
                  <ellipse cx="10" cy="-55" rx="3" ry="5" fill="#000" />
                  <path d="M-10,-35 Q0,-30 10,-35" stroke="#000" strokeWidth="2" fill="none" />
                  <path d="M0,-20 L0,30" stroke="#000" strokeWidth="4" />
                  <path d="M0,0 L-40,20" stroke="#000" strokeWidth="4" />
                  <path d="M0,0 L40,20" stroke="#000" strokeWidth="4" />
                  <path d="M0,30 L-20,80" stroke="#000" strokeWidth="4" />
                  <path d="M0,30 L20,80" stroke="#000" strokeWidth="4" />
                </g>
                
                {/* Stack of papers */}
                <g transform="translate(90, 10)">
                  <rect x="-140" y="-90" width="100" height="120" fill="#fff" stroke="#000" strokeWidth="2" transform="rotate(5)" />
                  <rect x="-130" y="-70" width="80" height="10" fill="#eee" stroke="#000" strokeWidth="1" transform="rotate(5)" />
                  <rect x="-130" y="-50" width="80" height="10" fill="#eee" stroke="#000" strokeWidth="1" transform="rotate(5)" />
                  <rect x="-130" y="-30" width="80" height="10" fill="#eee" stroke="#000" strokeWidth="1" transform="rotate(5)" />
                  
                  <rect x="-110" y="-80" width="100" height="120" fill="#fff" stroke="#000" strokeWidth="2" transform="rotate(-8)" />
                  <rect x="-100" y="-60" width="80" height="10" fill="#eee" stroke="#000" strokeWidth="1" transform="rotate(-8)" />
                  <rect x="-100" y="-40" width="80" height="10" fill="#eee" stroke="#000" strokeWidth="1" transform="rotate(-8)" />
                  <rect x="-100" y="-20" width="80" height="10" fill="#eee" stroke="#000" strokeWidth="1" transform="rotate(-8)" />
                  
                  <rect x="-70" y="-70" width="100" height="120" fill="#fff" stroke="#000" strokeWidth="2" transform="rotate(3)" />
                  <rect x="-60" y="-50" width="80" height="10" fill="#eee" stroke="#000" strokeWidth="1" transform="rotate(3)" />
                  <rect x="-60" y="-30" width="80" height="10" fill="#eee" stroke="#000" strokeWidth="1" transform="rotate(3)" />
                  <rect x="-60" y="-10" width="80" height="10" fill="#eee" stroke="#000" strokeWidth="1" transform="rotate(3)" />
                </g>
                
                {/* Logbook */}
                <g transform="translate(-40, 30)">
                  <rect x="-30" y="-40" width="60" height="80" fill="#8B4513" stroke="#000" strokeWidth="2" />
                  <rect x="-25" y="-35" width="50" height="70" fill="#fff" stroke="#000" strokeWidth="1" />
                  <line x1="-20" y1="-25" x2="20" y2="-25" stroke="#000" strokeWidth="1" />
                  <line x1="-20" y1="-15" x2="20" y2="-15" stroke="#000" strokeWidth="1" />
                  <line x1="-20" y1="-5" x2="20" y2="-5" stroke="#000" strokeWidth="1" />
                  <line x1="-20" y1="5" x2="20" y2="5" stroke="#000" strokeWidth="1" />
                  <line x1="-20" y1="15" x2="20" y2="15" stroke="#000" strokeWidth="1" />
                  <line x1="-20" y1="25" x2="20" y2="25" stroke="#000" strokeWidth="1" />
                </g>
                
                {/* Clock and gears */}
                <g transform="translate(120, -70)">
                  <circle cx="0" cy="0" r="25" fill="#ccc" stroke="#000" strokeWidth="2" />
                  <circle cx="0" cy="0" r="3" fill="#000" />
                  <line x1="0" y1="0" x2="0" y2="-15" stroke="#000" strokeWidth="2" />
                  <line x1="0" y1="0" x2="12" y2="8" stroke="#000" strokeWidth="2" />
                </g>
                
                <g transform="translate(170, -30)">
                  <path d="M0,0 L10,-17.32 L-10,-17.32 Z" fill="#FAB515" stroke="#000" strokeWidth="2" transform="rotate(0)" />
                  <path d="M0,0 L10,-17.32 L-10,-17.32 Z" fill="#FAB515" stroke="#000" strokeWidth="2" transform="rotate(60)" />
                  <path d="M0,0 L10,-17.32 L-10,-17.32 Z" fill="#FAB515" stroke="#000" strokeWidth="2" transform="rotate(120)" />
                  <path d="M0,0 L10,-17.32 L-10,-17.32 Z" fill="#FAB515" stroke="#000" strokeWidth="2" transform="rotate(180)" />
                  <path d="M0,0 L10,-17.32 L-10,-17.32 Z" fill="#FAB515" stroke="#000" strokeWidth="2" transform="rotate(240)" />
                  <path d="M0,0 L10,-17.32 L-10,-17.32 Z" fill="#FAB515" stroke="#000" strokeWidth="2" transform="rotate(300)" />
                  <circle cx="0" cy="0" r="10" fill="#ccc" stroke="#000" strokeWidth="2" />
                  <circle cx="0" cy="0" r="3" fill="#000" />
                </g>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
