import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section id="sobre" className="bg-white pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="inline-block comic-border bg-primary font-['Bangers'] text-4xl text-white px-8 py-3 transform -rotate-1"
              initial={{ rotate: 5, opacity: 0 }}
              whileInView={{ rotate: -1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              SOBRE NÓS
            </motion.h2>
          </div>
          
          <motion.div 
            className="comic-border bg-white p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-full h-full rounded-full comic-border" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="98" fill="#f8f9fa" />
                    
                    {/* Business Person */}
                    <circle cx="100" cy="70" r="35" fill="#FFD7B5" stroke="#000" strokeWidth="2" />
                    <path d="M70,140 L130,140 L130,100 Q115,90 100,95 Q85,90 70,100 Z" fill="#333" stroke="#000" strokeWidth="2" />
                    <rect x="70" y="140" width="60" height="20" fill="#333" stroke="#000" strokeWidth="2" />
                    
                    <path d="M85,65 Q100,50 115,65" stroke="#000" strokeWidth="2" fill="none" />
                    <path d="M85,70 L95,65 L85,60" stroke="#000" strokeWidth="2" fill="none" />
                    <path d="M115,70 L105,65 L115,60" stroke="#000" strokeWidth="2" fill="none" />
                    
                    <path d="M90,85 Q100,95 110,85" stroke="#000" strokeWidth="2" fill="none" />
                    
                    <rect x="75" y="120" width="50" height="10" rx="5" fill="#fff" stroke="#000" strokeWidth="1" />
                    
                    <rect x="60" y="40" width="80" height="10" rx="5" fill="#fff" stroke="#000" strokeWidth="1" />
                    <path d="M60,40 Q100,20 140,40" fill="#fff" stroke="#000" strokeWidth="1" />
                  </svg>
                  <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-secondary rounded-full comic-border flex items-center justify-center">
                    <i className="fas fa-utensils text-primary text-xl"></i>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <h3 className="font-['Bangers'] text-2xl text-primary mb-4">Nossa História</h3>
                <div className="font-['Comic_Neue'] space-y-4">
                  <p>
                    A Super Lista nasceu da frustração real de um proprietário de restaurante 
                    com mais de 15 anos no mercado. Como engenheiro químico de formação e 
                    entusiasta de tecnologia, nosso fundador decidiu resolver um problema que 
                    enfrentava diariamente.
                  </p>
                  <p>
                    Após anos perdendo tempo com cotações manuais, lidando com listas de 
                    compras desorganizadas e pagando mais do que deveria por insumos, 
                    ele desenvolveu a Super Lista para transformar esse processo.
                  </p>
                  <p>
                    Hoje, nossa missão é democratizar o acesso à tecnologia para todos os 
                    estabelecimentos de alimentos do Brasil, ajudando-os a economizar 
                    tempo e dinheiro para que possam focar no que realmente importa: 
                    seu negócio e seus clientes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="comic-border bg-secondary p-6">
              <h3 className="font-['Bangers'] text-2xl text-white text-center mb-6">Depoimentos dos Nossos Usuários</h3>
              
              <motion.div 
                className="speech-bubble bg-white p-4 mb-6"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="font-['Comic_Neue'] italic">
                  "Economizamos cerca de 20% nos custos de insumos e pelo menos 5 horas por semana 
                  desde que começamos a usar a Super Lista. É como ter um super poder para o meu restaurante!"
                </p>
                <p className="font-['Comic_Neue'] font-bold text-right mt-2">- Marcos S., Restaurante Sabor Caseiro</p>
              </motion.div>
              
              <motion.div 
                className="speech-bubble bg-white p-4"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="font-['Comic_Neue'] italic">
                  "Nunca mais esquecemos de comprar itens essenciais e as cotações automáticas nos 
                  permitiram negociar melhor com nossos fornecedores. Recomendo a todos!"
                </p>
                <p className="font-['Comic_Neue'] font-bold text-right mt-2">- Ana L., Padaria Delícia</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
