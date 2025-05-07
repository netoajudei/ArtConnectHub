import { useAuth } from "@/hooks/use-auth-context";
import { Bell, Search, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

export default function Header() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();

  // Função para lidar com logout
  const handleLogout = () => {
    logout();
    setLocation("/auth");
  };

  // Função para obter as iniciais do nome
  const getInitials = () => {
    if (!user?.name) return "SL";
    const parts = user.name.split(" ");
    if (parts.length > 1) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return user.name.substring(0, 2).toUpperCase();
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 py-2 px-6">
      <div className="flex justify-between items-center">
        {/* Barra de pesquisa */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Pesquisar produtos, fornecedores..." 
              className="pl-10 py-2 rounded-full bg-gray-100 border-gray-200 focus-visible:ring-primary w-full"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 h-5 w-5" />
          </div>
        </div>

        {/* Ícones e conta do usuário */}
        <div className="flex items-center space-x-6">
          {/* Notificações */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Carrinho */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingCart className="h-5 w-5 text-gray-700" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white rounded-full text-xs flex items-center justify-center">
              3
            </span>
          </button>

          {/* Perfil do usuário */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-3 p-1 rounded-full hover:bg-gray-100 transition-colors">
                <Avatar className="h-8 w-8 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-white font-['Comic_Neue']">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                  {user?.name || user?.nome || "Usuário"}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="font-['Comic_Neue']">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="cursor-pointer"
                onClick={() => setLocation("/dashboard/perfil")}
              >
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="cursor-pointer"
                onClick={() => setLocation("/dashboard/empresa")}
              >
                Empresa
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="cursor-pointer"
                onClick={() => setLocation("/dashboard/pedidos")}
              >
                Pedidos
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="cursor-pointer text-red-500"
                onClick={handleLogout}
              >
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}