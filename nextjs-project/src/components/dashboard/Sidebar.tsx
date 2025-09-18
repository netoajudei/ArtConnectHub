import { useAuth } from "@/hooks/use-auth-context";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";
import { 
  ListChecks, Heart, Users, ShoppingBag, Building,
  User, LogOut, Menu, Home, ChevronRight, Video
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [location, setLocation] = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    setLocation("/auth");
  };

  const menuItems = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
    },
    {
      label: "Minhas Listas",
      icon: ListChecks,
      href: "/dashboard/listas",
    },
    {
      label: "Parceiros",
      icon: Users,
      href: "/dashboard/parceiros",
    },
    {
      label: "Corações",
      icon: Heart,
      href: "/dashboard/favoritos",
    },
    {
      label: "Vídeos",
      icon: Video,
      href: "/dashboard/videos",
    },
    {
      label: "Pedidos",
      icon: ShoppingBag,
      href: "/dashboard/pedidos",
    },
    {
      label: "Dados da Empresa",
      icon: Building,
      href: "/dashboard/empresa",
    },
    {
      label: "Dados do Perfil",
      icon: User,
      href: "/dashboard/perfil",
    },
  ];

  return (
    <div className={cn(
      "bg-primary text-white h-screen transition-all duration-300 flex flex-col",
      collapsed ? "w-20" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-primary-foreground/10 flex justify-between items-center">
        {!collapsed && (
          <div className="font-['Bangers'] text-2xl text-secondary">
            Super Lista
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-md p-2 hover:bg-primary-foreground/10"
        >
          <Menu size={collapsed ? 24 : 20} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center rounded-md py-3 px-4 hover:bg-primary-foreground/10 transition-colors",
                  location === item.href ? "bg-primary-foreground/10" : ""
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setLocation(item.href);
                }}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {!collapsed && (
                  <span className="ml-3 font-['Comic_Neue']">{item.label}</span>
                )}
                {!collapsed && location === item.href && (
                  <ChevronRight size={16} className="ml-auto" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-primary-foreground/10">
        <button
          onClick={handleLogout}
          className="flex items-center rounded-md py-3 px-4 w-full hover:bg-primary-foreground/10 transition-colors"
        >
          <LogOut size={20} className="flex-shrink-0" />
          {!collapsed && (
            <span className="ml-3 font-['Comic_Neue']">Sair</span>
          )}
        </button>
      </div>
    </div>
  );
}