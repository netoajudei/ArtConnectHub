import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth-context";

// Usando importação padrão para imagens
const logoImage = "/attached_assets/logo_with_name.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { user, logout, isLoading } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  return (
    <header className="bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img 
              src={logoImage} 
              alt="Super Lista Logo" 
              className="h-16 md:h-[4.6rem] object-contain cursor-pointer"
            />
          </Link>
        </div>
        
        <nav className={`${mobileMenuOpen ? 'flex flex-col absolute top-full right-0 bg-primary p-4 z-50 w-full md:w-auto' : 'hidden'} md:flex md:flex-row md:static md:bg-transparent md:p-0 space-y-4 md:space-y-0 md:space-x-6 text-white`}>
          <a href="#problema" className="hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>O Problema</a>
          <a href="#solucao" className="hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Solução</a>
          <a href="#como-funciona" className="hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
          <a href="#sobre" className="hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a>
        </nav>
        
        <div className="flex items-center gap-4">
          {isLoading ? (
            <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse"></div>
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer hover:ring-2 hover:ring-white">
                  <AvatarFallback className="bg-secondary text-primary">
                    {user.name?.substring(0, 2).toUpperCase() || "SL"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="font-['Comic_Neue']">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuLabel>{user.name || "Usuário"}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Painel</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Perfil</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Configurações</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="secondary" 
              className="font-['Bangers']"
              onClick={() => setLocation("/auth")}
            >
              ENTRAR
            </Button>
          )}
          
          <button className="md:hidden text-white text-2xl" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
