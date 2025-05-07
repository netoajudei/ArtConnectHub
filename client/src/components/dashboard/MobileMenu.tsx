import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  ShoppingBag, 
  Heart, 
  ClipboardList, 
  Users, 
  Building2, 
  User, 
  LogOut,
  Home
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth-context";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [location, navigate] = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { 
      label: "Dashboard", 
      icon: Home, 
      href: "/dashboard", 
      active: location === "/dashboard" 
    },
    { 
      label: "Minhas Listas", 
      icon: ClipboardList, 
      href: "/dashboard/minhas-listas", 
      active: location.includes("/minhas-listas") 
    },
    { 
      label: "Parceiros", 
      icon: Users, 
      href: "/dashboard/parceiros", 
      active: location.includes("/parceiros") 
    },
    { 
      label: "Corações", 
      icon: Heart, 
      href: "/dashboard/coracoes", 
      active: location.includes("/coracoes") 
    },
    { 
      label: "Pedidos", 
      icon: ShoppingBag, 
      href: "/dashboard/pedidos", 
      active: location.includes("/pedidos") 
    },
    { 
      label: "Dados da Empresa", 
      icon: Building2, 
      href: "/dashboard/empresa", 
      active: location.includes("/empresa") 
    },
    { 
      label: "Perfil", 
      icon: User, 
      href: "/dashboard/perfil", 
      active: location.includes("/perfil") 
    }
  ];
  
  const handleNavigation = (href: string) => {
    navigate(href);
    setOpen(false);
  };
  
  const handleLogout = () => {
    logout();
    navigate("/auth");
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="font-['Comic_Neue'] p-0">
        <div className="py-6 px-4 bg-primary text-white">
          <h2 className="text-xl font-['Bangers']">Super Lista</h2>
          <p className="text-sm opacity-80">Menu de Navegação</p>
        </div>
        
        <nav className="flex flex-col p-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.href)}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md my-1 transition-colors",
                item.active 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-muted text-gray-600 hover:text-primary"
              )}
            >
              <item.icon className={cn("h-5 w-5", item.active ? "text-primary" : "text-gray-500")} />
              <span>{item.label}</span>
            </button>
          ))}
          
          <div className="border-t my-4"></div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Sair</span>
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}