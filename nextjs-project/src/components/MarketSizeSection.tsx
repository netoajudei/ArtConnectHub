import { motion } from "framer-motion";

export default function MarketSizeSection() {
  return (
    <section className="bg-white pt-16 pb-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="comic-border bg-primary p-8 max-w-4xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Bangers'] text-3xl text-white mb-8 text-center">UM MERCADO GIGANTESCO!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="comic-border bg-white p-6 text-center"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="font-['Bangers'] text-5xl text-primary block mb-2">2 MILHÕES</span>
              <p className="font-['Comic_Neue'] text-xl">Estabelecimentos de alimentos no Brasil</p>
            </motion.div>
            
            <motion.div 
              className="comic-border bg-white p-6 text-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="font-['Bangers'] text-5xl text-primary block mb-2">R$ 217,6 BI</span>
              <p className="font-['Comic_Neue'] text-xl">Movimentados por ano no setor</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 speech-bubble bg-white p-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="font-['Comic_Neue'] text-center text-lg">
              E a maioria desses estabelecimentos ainda usa métodos antiquados para fazer cotações e compras!
            </p>
          </motion.div>
          
          <motion.div 
            className="absolute -top-10 -right-10 w-24 h-24 bg-secondary comic-border rounded-full flex items-center justify-center transform rotate-12"
            initial={{ rotate: -20, scale: 0 }}
            whileInView={{ rotate: 12, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="font-['Bangers'] text-2xl text-primary">UAU!</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
