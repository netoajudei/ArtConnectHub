export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-secondary">
                <span className="font-['Bangers'] text-primary text-xl">SL</span>
              </div>
              <h3 className="text-2xl font-['Bangers']">Super Lista</h3>
            </div>
            <p className="font-['Comic_Neue'] opacity-80">
              O super-herói das compras para estabelecimentos de alimentos em todo o Brasil.
            </p>
          </div>
          
          <div>
            <h4 className="font-['Bangers'] text-secondary text-xl mb-4">Links Rápidos</h4>
            <ul className="font-['Comic_Neue'] space-y-2 opacity-80">
              <li><a href="#" className="hover:text-secondary transition">Início</a></li>
              <li><a href="#problema" className="hover:text-secondary transition">O Problema</a></li>
              <li><a href="#solucao" className="hover:text-secondary transition">Solução</a></li>
              <li><a href="#como-funciona" className="hover:text-secondary transition">Como Funciona</a></li>
              <li><a href="#sobre" className="hover:text-secondary transition">Sobre Nós</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Bangers'] text-secondary text-xl mb-4">Para Parceiros</h4>
            <ul className="font-['Comic_Neue'] space-y-2 opacity-80">
              <li><a href="#" className="hover:text-secondary transition">Seja um Fornecedor</a></li>
              <li><a href="#" className="hover:text-secondary transition">Parcerias Estratégicas</a></li>
              <li><a href="#" className="hover:text-secondary transition">Programa de Afiliados</a></li>
              <li><a href="#" className="hover:text-secondary transition">Material de Imprensa</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Bangers'] text-secondary text-xl mb-4">Contato</h4>
            <ul className="font-['Comic_Neue'] space-y-2 opacity-80">
              <li className="flex items-center"><i className="fas fa-envelope mr-2 text-secondary"></i> contato@superlista.com.br</li>
              <li className="flex items-center"><i className="fas fa-phone mr-2 text-secondary"></i> (11) 9999-9999</li>
              <li className="flex items-center"><i className="fas fa-map-marker-alt mr-2 text-secondary"></i> São Paulo, SP</li>
            </ul>
            
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition"><i className="fab fa-instagram text-2xl"></i></a>
              <a href="#" className="text-white hover:text-secondary transition"><i className="fab fa-facebook text-2xl"></i></a>
              <a href="#" className="text-white hover:text-secondary transition"><i className="fab fa-linkedin text-2xl"></i></a>
              <a href="#" className="text-white hover:text-secondary transition"><i className="fab fa-whatsapp text-2xl"></i></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="font-['Comic_Neue'] opacity-60">
            &copy; {new Date().getFullYear()} Super Lista. Todos os direitos reservados. Feito com <i className="fas fa-heart text-primary"></i> no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}
