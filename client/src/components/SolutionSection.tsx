import { motion } from "framer-motion";

export default function SolutionSection() {
  const benefits = [
    {
      icon: "fa-list-check",
      title: "Listas Colaborativas Inteligentes",
      description: "Crie listas de compras que toda a sua equipe pode atualizar em tempo real. Nunca mais esqueça um item importante!"
    },
    {
      icon: "fa-share-nodes",
      title: "Compartilhamento Fácil",
      description: "Compartilhe suas listas com funcionários e fornecedores com apenas um clique, mantendo todos na mesma página."
    },
    {
      icon: "fa-box",
      title: "Controle de Estoque Mínimo",
      description: "Configure alertas automáticos quando produtos atingirem o estoque mínimo. Seja avisado antes de ficar sem ingredientes essenciais."
    },
    {
      icon: "fa-bolt",
      title: "Comparação de Preços",
      description: "Receba cotações de múltiplos fornecedores automaticamente e escolha a melhor oferta com um clique. Economize até 25% nas compras!"
    },
    {
      icon: "fa-clock",
      title: "Economia de Tempo",
      description: "Reduza drasticamente o tempo gasto com cotações e pedidos. O que levava horas agora é feito em minutos!"
    },
    {
      icon: "fa-truck",
      title: "Múltiplos Fornecedores",
      description: "Acesse uma rede crescente de fornecedores de alimentos e insumos, todos disponíveis para atender suas necessidades."
    }
  ];

  return (
    <section id="solucao" className="bg-white pt-16 pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="inline-block comic-border bg-secondary font-['Bangers'] text-4xl text-white px-8 py-3 transform rotate-2"
            initial={{ rotate: -5 }}
            animate={{ rotate: 2 }}
            transition={{ duration: 0.5 }}
          >
            COMO A SUPER LISTA AJUDA?
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="flex items-start space-x-4 flash-in" 
              style={{opacity: 0}}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex-shrink-0 comic-border bg-primary rounded-full flex items-center justify-center">
                <i className={`fas ${benefit.icon} text-white text-2xl`}></i>
              </div>
              <div>
                <h3 className="font-['Bangers'] text-2xl text-primary mb-2">{benefit.title}</h3>
                <p className="font-['Comic_Neue']">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 comic-border bg-white p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="font-['Bangers'] text-2xl text-primary mb-4 text-center">Nossa História</h3>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <svg className="w-40 h-40 rounded-full comic-border mx-auto" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="98" fill="#f8f9fa" stroke="#000" strokeWidth="4" />
                <circle cx="100" cy="80" r="30" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                <path d="M70,70 Q100,40 130,70" fill="#333" stroke="#000" strokeWidth="2" />
                <circle cx="85" cy="75" r="5" fill="#000" />
                <circle cx="115" cy="75" r="5" fill="#000" />
                <path d="M85,95 Q100,110 115,95" stroke="#000" strokeWidth="2" fill="none" />
                <rect x="70" y="40" width="60" height="15" rx="5" fill="#fff" stroke="#000" strokeWidth="2" />
                <path d="M70,40 Q100,25 130,40" fill="#fff" stroke="#000" strokeWidth="2" />
                <rect x="60" y="120" width="80" height="40" rx="10" fill="#EC0E33" stroke="#000" strokeWidth="2" />
                <path d="M90,120 L90,160" stroke="#000" strokeWidth="1" />
                <path d="M110,120 L110,160" stroke="#000" strokeWidth="1" />
                <path d="M80,130 L120,130" stroke="#fff" strokeWidth="2" />
                <path d="M80,140 L120,140" stroke="#fff" strokeWidth="2" />
                <path d="M80,150 L120,150" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="font-['Comic_Neue'] text-lg">
                A Super Lista foi criada por um proprietário de restaurante com mais de 15 anos de experiência, 
                que também é engenheiro químico apaixonado por tecnologia. Frustrado com os processos lentos e 
                ineficientes de cotação e compra, ele desenvolveu esta solução para transformar como os 
                estabelecimentos gerenciam suas compras.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-1/4 translate-y-1/4 z-10">
        <div className="w-full h-full pow-bubble flex items-center justify-center">
          <p className="font-['Bangers'] text-3xl text-primary transform -rotate-12">POW!</p>
        </div>
      </div>
    </section>
  );
}
