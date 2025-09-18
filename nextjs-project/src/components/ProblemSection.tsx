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
            <div className="w-full mt-4 rounded comic-border overflow-hidden">
              <img 
                src="/attached_assets/problem_images/tempo_desperdicado.jpeg" 
                alt="Tempo Desperdiçado" 
                className="w-full h-[250px] object-cover object-center"
              />
            </div>
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
            <div className="w-full mt-4 rounded comic-border overflow-hidden">
              <img 
                src="/attached_assets/problem_images/itens_esquecidos.png" 
                alt="Itens Esquecidos" 
                className="w-full h-[250px] object-cover object-center"
              />
            </div>
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
            <div className="w-full mt-4 rounded comic-border overflow-hidden">
              <img 
                src="/attached_assets/problem_images/pagando_demais.jpeg" 
                alt="Pagando Demais" 
                className="w-full h-[250px] object-cover object-center"
              />
            </div>
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
            <div className="w-full mt-4 rounded comic-border overflow-hidden">
              <img 
                src="/attached_assets/problem_images/processos_ineficientes.jpeg" 
                alt="Processos Ineficientes" 
                className="w-full h-[250px] object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
