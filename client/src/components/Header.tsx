import { useState } from "react";
// Usando importação padrão para imagens
const logoImage = "/attached_assets/logo_with_name.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="Super Lista Logo" 
            className="h-16 md:h-[4.6rem] object-contain"
          />
        </div>
        
        <nav className={`${mobileMenuOpen ? 'flex flex-col absolute top-full right-0 bg-primary p-4 z-50 w-full md:w-auto' : 'hidden'} md:flex md:flex-row md:static md:bg-transparent md:p-0 space-y-4 md:space-y-0 md:space-x-6 text-white`}>
          <a href="#problema" className="hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>O Problema</a>
          <a href="#solucao" className="hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Solução</a>
          <a href="#como-funciona" className="hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
          <a href="#sobre" className="hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a>
        </nav>
        
        <button className="md:hidden text-white text-2xl" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
