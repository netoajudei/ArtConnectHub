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
                <div className="w-full mb-4 comic-border overflow-hidden rounded">
                  <img 
                    src="/attached_assets/how_it_works/montagem_lista.jpeg" 
                    alt="Montagem da Lista" 
                    className="w-full h-[200px] object-cover object-center"
                  />
                </div>
              )}
              
              {step.number === 2 && (
                <div className="w-full mb-4 comic-border overflow-hidden rounded">
                  <img 
                    src="/attached_assets/how_it_works/compartilhamento.jpeg" 
                    alt="Compartilhamento" 
                    className="w-full h-[200px] object-cover object-center"
                  />
                </div>
              )}
              
              {step.number === 3 && (
                <div className="w-full mb-4 comic-border overflow-hidden rounded">
                  <img 
                    src="/attached_assets/how_it_works/receba_cotacoes.png" 
                    alt="Receba Cotações" 
                    className="w-full h-[200px] object-cover object-center"
                  />
                </div>
              )}
              
              {step.number === 4 && (
                <div className="w-full mb-4 comic-border overflow-hidden rounded">
                  <img 
                    src="/attached_assets/how_it_works/escolha_compre.jpeg" 
                    alt="Escolha e Compre" 
                    className="w-full h-[200px] object-cover object-center"
                  />
                </div>
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
