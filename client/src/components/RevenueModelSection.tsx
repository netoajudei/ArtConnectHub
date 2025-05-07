import { motion } from "framer-motion";

export default function RevenueModelSection() {
  return (
    <section className="bg-secondary pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="inline-block comic-border bg-white font-['Bangers'] text-4xl text-secondary px-8 py-3"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            VANTAGENS PARA OS FORNECEDORES
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="comic-border bg-white p-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                <i className="fas fa-ad text-white text-xl"></i>
              </div>
              <h3 className="font-['Bangers'] text-2xl text-primary">Anúncios no App</h3>
            </div>
            <ul className="font-['Comic_Neue'] space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check text-[#60D394] mt-1 mr-2"></i>
                <span>Anúncios relacionados a produtos que você já compra</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-[#60D394] mt-1 mr-2"></i>
                <span>Banners de vídeo durante o processamento de pedidos</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-[#60D394] mt-1 mr-2"></i>
                <span>Conteúdo relevante que pode até te ajudar a descobrir novos produtos</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="comic-border bg-white p-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                <i className="fas fa-crown text-white text-xl"></i>
              </div>
              <h3 className="font-['Bangers'] text-2xl text-primary">Planos para Fornecedores</h3>
            </div>
            <ul className="font-['Comic_Neue'] space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check text-[#60D394] mt-1 mr-2"></i>
                <span>Gerenciamento avançado de clientes</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-[#60D394] mt-1 mr-2"></i>
                <span>Cotações públicas para atrair novos clientes</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-[#60D394] mt-1 mr-2"></i>
                <span>Relatórios de desempenho e análise de vendas</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 comic-border bg-white p-6 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-['Bangers'] text-2xl text-primary mb-4 text-center">Por que Gratuito?</h3>
          <p className="font-['Comic_Neue'] text-lg">
            Queremos democratizar o acesso à tecnologia para todos os estabelecimentos 
            de alimentos, independente do seu tamanho. Acreditamos que um modelo gratuito 
            para usuários finais é a melhor maneira de causar uma disrupção positiva e 
            trazer benefícios reais para todos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
