import { motion } from "framer-motion";

export default function PartnerCTASection() {
  return (
    <section className="bg-primary pt-16 pb-24 comic-dots">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto comic-border bg-white p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Bangers'] text-3xl text-primary text-center mb-8">SEJA NOSSO PARCEIRO!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-['Bangers'] text-2xl text-secondary mb-4">Para Fornecedores</h3>
              <ul className="font-['Comic_Neue'] space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-star text-secondary mt-1 mr-2"></i>
                  <span>Acesso a uma base crescente de estabelecimentos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-secondary mt-1 mr-2"></i>
                  <span>Receba pedidos organizados e padronizados</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-secondary mt-1 mr-2"></i>
                  <span>Reduza custos de vendas e aquisição de clientes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-secondary mt-1 mr-2"></i>
                  <span>Planos premium com recursos avançados</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-['Bangers'] text-2xl text-secondary mb-4">Para Parceiros Estratégicos</h3>
              <ul className="font-['Comic_Neue'] space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-star text-secondary mt-1 mr-2"></i>
                  <span>Oportunidades de co-marketing e integração</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-secondary mt-1 mr-2"></i>
                  <span>Acesso antecipado a novos recursos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-secondary mt-1 mr-2"></i>
                  <span>Programas de indicação e comissões</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-secondary mt-1 mr-2"></i>
                  <span>Colaboração em pesquisa e desenvolvimento</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="comic-border bg-secondary hover:bg-yellow-500 text-primary font-['Bangers'] text-2xl px-8 py-3 rounded-lg transform hover:scale-105 transition duration-300 shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
              QUERO SER PARCEIRO <i className="fas fa-handshake ml-2"></i>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
