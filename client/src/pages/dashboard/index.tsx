import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SponsorCarousel from "@/components/dashboard/SponsorCarousel";
import PromotionGrid from "@/components/dashboard/PromotionGrid";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/hooks/use-auth-context";
import { ShoppingBag, ListChecks, Users, Clock } from "lucide-react";

// Componente de estatísticas
const StatCard = ({ title, value, icon: Icon, color }: {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 font-['Comic_Neue']">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const { user } = useAuth();

  // Dados para estatísticas (simulados)
  const stats = [
    {
      title: "Listas de Compras",
      value: "5",
      icon: ListChecks,
      color: "bg-blue-500",
    },
    {
      title: "Pedidos Realizados",
      value: "12",
      icon: ShoppingBag,
      color: "bg-green-500",
    },
    {
      title: "Fornecedores Parceiros",
      value: "8",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Economia Mensal",
      value: "R$ 425,30",
      icon: Clock,
      color: "bg-amber-500",
    },
  ];

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="mb-6">
          <h1 className="text-2xl font-['Bangers'] text-gray-800">Bem-vindo, {user?.name || user?.nome || "Usuário"}!</h1>
          <p className="text-gray-500 font-['Comic_Neue']">Confira as melhores ofertas para o seu estabelecimento</p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Carousel de patrocinadores */}
        <SponsorCarousel />

        {/* Grades de promoções por categoria */}
        <PromotionGrid />
      </DashboardLayout>
    </ProtectedRoute>
  );
}