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
        

      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-1/4 translate-y-1/4 z-10">
        <div className="w-full h-full pow-bubble flex items-center justify-center">
          <p className="font-['Bangers'] text-3xl text-primary transform -rotate-12">POW!</p>
        </div>
      </div>
    </section>
  );
}
