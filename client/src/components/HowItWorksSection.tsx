import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Montagem da Lista",
      description: "Crie sua lista de compras colaborativa com sua equipe. Adicione itens, quantidades e especificações especiais.",
    },
    {
      number: 2,
      title: "Compartilhamento",
      description: "Compartilhe a lista com todos os funcionários envolvidos para checagem e aprovação final.",
    },
    {
      number: 3,
      title: "Receba Cotações",
      description: "Fornecedores recebem sua lista e enviam cotações competitivas diretamente para você no app.",
    },
    {
      number: 4,
      title: "Escolha e Compre",
      description: "Compare preços, escolha o melhor fornecedor e envie seu pedido com apenas um clique!",
    }
  ];

  return (
    <section id="como-funciona" className="bg-secondary pt-16 pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="inline-block comic-border bg-white font-['Bangers'] text-4xl text-secondary px-8 py-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            COMO FUNCIONA?
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="comic-border bg-white p-6 relative hover-pop"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary comic-border flex items-center justify-center">
                <span className="font-['Bangers'] text-2xl text-white">{step.number}</span>
              </div>
              <h3 className="font-['Bangers'] text-2xl text-primary mb-4 pt-4">{step.title}</h3>
              {step.number === 1 && (
                <svg className="w-full mb-4 comic-border" height="200" viewBox="0 0 400 200">
                  <rect width="400" height="200" fill="#f8f9fa" />
                  <g transform="translate(200, 100)">
                    <rect x="-180" y="-80" width="360" height="160" rx="10" fill="#f8f9fa" stroke="#000" strokeWidth="3" />
                    
                    {/* People collaborating around a list */}
                    <g transform="translate(-100, 0)">
                      <circle cx="0" cy="-40" r="20" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                      <path d="M-10,-45 L-5,-48 L0,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M0,-45 L5,-48 L10,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M-5,-30 Q0,-25 5,-30" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M0,-20 L0,20" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L-20,20" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L20,20" stroke="#000" strokeWidth="3" />
                    </g>
                    
                    <g transform="translate(0, 0)">
                      <circle cx="0" cy="-40" r="20" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                      <path d="M-10,-45 L-5,-48 L0,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M0,-45 L5,-48 L10,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M-5,-30 Q0,-25 5,-30" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M0,-20 L0,20" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L-20,20" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L20,20" stroke="#000" strokeWidth="3" />
                    </g>
                    
                    <g transform="translate(100, 0)">
                      <circle cx="0" cy="-40" r="20" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                      <path d="M-10,-45 L-5,-48 L0,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M0,-45 L5,-48 L10,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M-5,-30 Q0,-25 5,-30" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M0,-20 L0,20" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L-20,20" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L20,20" stroke="#000" strokeWidth="3" />
                    </g>
                    
                    {/* Shopping list */}
                    <g transform="translate(0, -10)">
                      <rect x="-60" y="-30" width="120" height="160" fill="#fff" stroke="#000" strokeWidth="2" />
                      <line x1="-50" y1="-15" x2="50" y2="-15" stroke="#000" strokeWidth="1" />
                      <line x1="-50" y1="0" x2="50" y2="0" stroke="#000" strokeWidth="1" />
                      <line x1="-50" y1="15" x2="50" y2="15" stroke="#000" strokeWidth="1" />
                      <line x1="-50" y1="30" x2="50" y2="30" stroke="#000" strokeWidth="1" />
                      <line x1="-50" y1="45" x2="50" y2="45" stroke="#000" strokeWidth="1" />
                      <line x1="-50" y1="60" x2="50" y2="60" stroke="#000" strokeWidth="1" />
                      <line x1="-50" y1="75" x2="50" y2="75" stroke="#000" strokeWidth="1" />
                      <line x1="-50" y1="90" x2="50" y2="90" stroke="#000" strokeWidth="1" />
                      
                      <rect x="-50" y="-25" width="10" height="10" fill="#EC0E33" stroke="#000" strokeWidth="1" />
                      <rect x="-50" y="-10" width="10" height="10" fill="#fff" stroke="#000" strokeWidth="1" />
                      <rect x="-50" y="5" width="10" height="10" fill="#fff" stroke="#000" strokeWidth="1" />
                      <rect x="-50" y="20" width="10" height="10" fill="#EC0E33" stroke="#000" strokeWidth="1" />
                      <rect x="-50" y="35" width="10" height="10" fill="#fff" stroke="#000" strokeWidth="1" />
                    </g>
                  </g>
                </svg>
              )}
              
              {step.number === 2 && (
                <svg className="w-full mb-4 comic-border" height="200" viewBox="0 0 400 200">
                  <rect width="400" height="200" fill="#f8f9fa" />
                  <g transform="translate(200, 100)">
                    {/* Sharing with team */}
                    <g transform="translate(-120, 0)">
                      <circle cx="0" cy="-40" r="25" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                      <path d="M-15,-45 L-8,-50 L-1,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M1,-45 L8,-50 L15,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M-10,-25 Q0,-15 10,-25" stroke="#000" strokeWidth="2" fill="none" />
                      <path d="M0,-15 L0,35" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L-25,25" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L25,25" stroke="#000" strokeWidth="3" />
                      
                      <rect x="-20" y="-90" width="40" height="30" fill="#fff" stroke="#000" strokeWidth="2" />
                      <rect x="-8" y="-84" width="16" height="12" fill="#EC0E33" />
                      <path d="M-15,-75 L15,-75 L0,-60 Z" fill="#fff" stroke="#000" strokeWidth="2" />
                    </g>
                    
                    {/* List being shared */}
                    <g transform="translate(0, 0)">
                      <rect x="-50" y="-70" width="100" height="140" fill="#fff" stroke="#000" strokeWidth="2" transform="rotate(-5)" />
                      <line x1="-40" y1="-50" x2="40" y2="-55" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                      <line x1="-40" y1="-30" x2="40" y2="-35" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                      <line x1="-40" y1="-10" x2="40" y2="-15" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                      <line x1="-40" y1="10" x2="40" y2="5" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                      <line x1="-40" y1="30" x2="40" y2="25" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                      <line x1="-40" y1="50" x2="40" y2="45" stroke="#000" strokeWidth="1" transform="rotate(-5)" />
                    </g>
                    
                    {/* People receiving the shared list */}
                    <g transform="translate(120, -20)">
                      <circle cx="0" cy="-20" r="25" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                      <path d="M-15,-25 L-8,-30 L-1,-25" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M1,-25 L8,-30 L15,-25" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M-10,-5 Q0,5 10,-5" stroke="#000" strokeWidth="2" fill="none" />
                      <path d="M0,5 L0,55" stroke="#000" strokeWidth="3" />
                      <path d="M0,20 L-25,45" stroke="#000" strokeWidth="3" />
                      <path d="M0,20 L25,45" stroke="#000" strokeWidth="3" />
                      
                      <circle cx="-30" cy="-60" r="15" fill="#fff" stroke="#000" strokeWidth="2" />
                      <path d="M-30,-70 L-30,-50" stroke="#000" strokeWidth="2" />
                      <path d="M-40,-60 L-20,-60" stroke="#000" strokeWidth="2" />
                    </g>
                    
                    {/* Sharing arrows */}
                    <g>
                      <path d="M-60,-20 C-30,-60 30,-60 60,-20" fill="none" stroke="#EC0E33" strokeWidth="3" strokeDasharray="10,5" />
                      <path d="M50,-25 L60,-20 L55,-10" fill="none" stroke="#EC0E33" strokeWidth="3" />
                    </g>
                  </g>
                </svg>
              )}
              
              {step.number === 3 && (
                <svg className="w-full mb-4 comic-border" height="200" viewBox="0 0 400 200">
                  <rect width="400" height="200" fill="#f8f9fa" />
                  <g transform="translate(200, 100)">
                    {/* Suppliers sending quotes */}
                    <g transform="translate(-120, 0)">
                      <rect x="-40" y="-60" width="80" height="120" fill="#EC0E33" stroke="#000" strokeWidth="2" opacity="0.8" />
                      <rect x="-35" y="-55" width="70" height="20" fill="#fff" stroke="#000" strokeWidth="1" />
                      <text x="-15" y="-40" fontSize="14" fontWeight="bold">Forn. A</text>
                      
                      <rect x="-35" y="-25" width="70" height="75" fill="#fff" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="-15" x2="25" y2="-15" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="-5" x2="25" y2="-5" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="5" x2="25" y2="5" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="15" x2="25" y2="15" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="25" x2="25" y2="25" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="35" x2="25" y2="35" stroke="#000" strokeWidth="1" />
                    </g>
                    
                    <g transform="translate(0, -30)">
                      <rect x="-40" y="-60" width="80" height="120" fill="#FAB515" stroke="#000" strokeWidth="2" opacity="0.8" />
                      <rect x="-35" y="-55" width="70" height="20" fill="#fff" stroke="#000" strokeWidth="1" />
                      <text x="-15" y="-40" fontSize="14" fontWeight="bold">Forn. B</text>
                      
                      <rect x="-35" y="-25" width="70" height="75" fill="#fff" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="-15" x2="25" y2="-15" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="-5" x2="25" y2="-5" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="5" x2="25" y2="5" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="15" x2="25" y2="15" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="25" x2="25" y2="25" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="35" x2="25" y2="35" stroke="#000" strokeWidth="1" />
                    </g>
                    
                    <g transform="translate(120, 0)">
                      <rect x="-40" y="-60" width="80" height="120" fill="#4361EE" stroke="#000" strokeWidth="2" opacity="0.8" />
                      <rect x="-35" y="-55" width="70" height="20" fill="#fff" stroke="#000" strokeWidth="1" />
                      <text x="-15" y="-40" fontSize="14" fontWeight="bold">Forn. C</text>
                      
                      <rect x="-35" y="-25" width="70" height="75" fill="#fff" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="-15" x2="25" y2="-15" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="-5" x2="25" y2="-5" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="5" x2="25" y2="5" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="15" x2="25" y2="15" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="25" x2="25" y2="25" stroke="#000" strokeWidth="1" />
                      <line x1="-25" y1="35" x2="25" y2="35" stroke="#000" strokeWidth="1" />
                    </g>
                    
                    {/* Mobile device receiving quotes */}
                    <g transform="translate(0, 70)">
                      <rect x="-30" y="-20" width="60" height="100" rx="5" fill="#333" stroke="#000" strokeWidth="2" />
                      <rect x="-25" y="-15" width="50" height="80" rx="2" fill="#fff" stroke="#000" strokeWidth="1" />
                      <circle cx="0" cy="75" r="7" fill="#eee" stroke="#000" strokeWidth="1" />
                      <text x="0" y="25" fontSize="10" textAnchor="middle" fontWeight="bold">Super Lista</text>
                    </g>
                    
                    {/* Arrows pointing to the mobile device */}
                    <g>
                      <path d="M-100,30 L0,60" fill="none" stroke="#EC0E33" strokeWidth="2" strokeDasharray="8,4" />
                      <path d="M0,0 L0,40" fill="none" stroke="#FAB515" strokeWidth="2" strokeDasharray="8,4" />
                      <path d="M100,30 L0,60" fill="none" stroke="#4361EE" strokeWidth="2" strokeDasharray="8,4" />
                    </g>
                  </g>
                </svg>
              )}
              
              {step.number === 4 && (
                <svg className="w-full mb-4 comic-border" height="200" viewBox="0 0 400 200">
                  <rect width="400" height="200" fill="#f8f9fa" />
                  <g transform="translate(200, 100)">
                    {/* Person selecting best price */}
                    <g transform="translate(-100, 0)">
                      <circle cx="0" cy="-40" r="25" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                      <path d="M-15,-45 L-8,-50 L-1,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M1,-45 L8,-50 L15,-45" stroke="#000" strokeWidth="1.5" fill="none" />
                      <path d="M-10,-25 Q0,-15 10,-25" stroke="#000" strokeWidth="2" fill="none" />
                      <path d="M0,-15 L0,35" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L-25,25" stroke="#000" strokeWidth="3" />
                      <path d="M0,0 L25,25" stroke="#000" strokeWidth="3" />
                    </g>
                    
                    {/* Table of prices comparison */}
                    <g transform="translate(30, 0)">
                      <rect x="-80" y="-70" width="160" height="140" fill="#fff" stroke="#000" strokeWidth="2" />
                      
                      <rect x="-75" y="-65" width="150" height="25" fill="#eee" stroke="#000" strokeWidth="1" />
                      <text x="-65" y="-48" fontSize="12" fontWeight="bold">Item</text>
                      <text x="-10" y="-48" fontSize="12" fontWeight="bold">Forn. A</text>
                      <text x="45" y="-48" fontSize="12" fontWeight="bold">Forn. B</text>
                      
                      <line x1="-75" y1="-40" x2="75" y2="-40" stroke="#000" strokeWidth="1" />
                      <line x1="-35" y1="-65" x2="-35" y2="70" stroke="#000" strokeWidth="1" />
                      <line x1="15" y1="-65" x2="15" y2="70" stroke="#000" strokeWidth="1" />
                      
                      <text x="-65" y="-25" fontSize="10">Arroz</text>
                      <text x="-10" y="-25" fontSize="10">R$55,90</text>
                      <text x="45" y="-25" fontSize="10" fill="#EC0E33" fontWeight="bold">R$49,90</text>
                      
                      <text x="-65" y="-5" fontSize="10">Feijão</text>
                      <text x="-10" y="-5" fontSize="10" fill="#EC0E33" fontWeight="bold">R$32,50</text>
                      <text x="45" y="-5" fontSize="10">R$35,90</text>
                      
                      <text x="-65" y="15" fontSize="10">Óleo</text>
                      <text x="-10" y="15" fontSize="10">R$12,90</text>
                      <text x="45" y="15" fontSize="10" fill="#EC0E33" fontWeight="bold">R$10,50</text>
                      
                      <text x="-65" y="35" fontSize="10">Açúcar</text>
                      <text x="-10" y="35" fontSize="10" fill="#EC0E33" fontWeight="bold">R$18,90</text>
                      <text x="45" y="35" fontSize="10">R$22,50</text>
                      
                      <text x="-65" y="55" fontSize="10">TOTAL</text>
                      <text x="-10" y="55" fontSize="10" fontWeight="bold">R$120,20</text>
                      <text x="45" y="55" fontSize="10" fontWeight="bold">R$118,80</text>
                      
                      <circle cx="45" cy="55" r="15" fill="#FAB515" fillOpacity="0.3" stroke="#EC0E33" strokeWidth="2" />
                    </g>
                    
                    {/* Check mark and confirmation */}
                    <g transform="translate(130, 50)">
                      <circle cx="0" cy="0" r="30" fill="#60D394" stroke="#000" strokeWidth="2" />
                      <path d="M-15,0 L-5,15 L15,-10" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    
                    {/* Arrow from comparison to confirmation */}
                    <g>
                      <path d="M70,10 C90,10 110,30 100,50" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="5,3" />
                      <path d="M95,40 L100,50 L110,45" fill="none" stroke="#000" strokeWidth="2" />
                    </g>
                  </g>
                </svg>
              )}
              
              <p className="font-['Comic_Neue']">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="speech-bubble mt-16 max-w-2xl mx-auto p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="font-['Comic_Neue'] text-xl text-center">
            <span className="font-bold text-primary">SUPER RÁPIDO!</span> Todo o processo leva apenas alguns 
            minutos, economizando horas do seu dia para focar no que realmente importa: seu negócio!
          </p>
        </motion.div>
      </div>
      
      <div className="speed-lines absolute bottom-0 left-0 w-full h-24 opacity-30"></div>
    </section>
  );
}
