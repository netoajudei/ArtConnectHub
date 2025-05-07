import { cn } from "@/lib/utils";
import { Star, ChevronRight, CircleDollarSign, Pizza, Beef, Fish, Clock } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ProductCardProps {
  name: string;
  price: string;
  discount?: string;
  supplier: string;
  icon?: React.ComponentType<{ className?: string }>;
  colorClass?: string;
}

const ProductCard = ({ name, price, discount, supplier, icon: Icon, colorClass = "bg-gray-100" }: ProductCardProps) => (
  <div className="rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
    <div className={cn("h-32 flex items-center justify-center", colorClass)}>
      {Icon && <Icon className="w-16 h-16 text-white/80" />}
    </div>
    <div className="p-4">
      <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
      <div className="flex justify-between items-center mb-1">
        <div>
          <span className="text-lg font-bold text-primary">{price}</span>
          {discount && (
            <span className="ml-2 text-sm line-through text-gray-500">{discount}</span>
          )}
        </div>
        {discount && (
          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
            Oferta
          </span>
        )}
      </div>
      <div className="text-xs text-gray-500">Fornecedor: {supplier}</div>
      <button className="mt-3 text-sm text-primary flex items-center hover:underline">
        Adicionar à lista <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  </div>
);

interface CategorySectionProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass?: string;
  products: ProductCardProps[];
}

const CategorySection = ({ title, icon: Icon, colorClass = "text-primary", products }: CategorySectionProps) => (
  <div className="mb-10">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-['Bangers'] text-gray-800 flex items-center">
        <Icon className={cn("mr-2 h-5 w-5", colorClass)} />
        {title}
      </h2>
      <button className="text-sm text-primary flex items-center hover:underline">
        Ver todos <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </div>

    <ScrollArea>
      <div className="flex space-x-4 pb-4">
        {products.map((product, index) => (
          <div key={index} className="min-w-[220px] max-w-[220px]">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </div>
);

export default function PromotionGrid() {
  // Dados simulados para as promoções por categorias
  const categories = [
    {
      title: "Exclusivas do App",
      icon: Star,
      colorClass: "text-amber-500",
      products: [
        { 
          name: "Arroz Premium 5kg", 
          price: "R$ 21,90", 
          discount: "R$ 25,90", 
          supplier: "Distribuidor Alimentos",
          colorClass: "bg-amber-500",
          icon: CircleDollarSign
        },
        { 
          name: "Azeite Extra Virgem 500ml", 
          price: "R$ 29,90", 
          discount: "R$ 34,90", 
          supplier: "Importadora Qualidade",
          colorClass: "bg-amber-500",
          icon: CircleDollarSign
        },
        { 
          name: "Feijão Preto 1kg", 
          price: "R$ 7,49", 
          discount: "R$ 8,90", 
          supplier: "Distribuidor Central",
          colorClass: "bg-amber-500",
          icon: CircleDollarSign
        },
        { 
          name: "Macarrão Premium 500g", 
          price: "R$ 5,90", 
          discount: "R$ 7,50", 
          supplier: "Atacado Massas",
          colorClass: "bg-amber-500",
          icon: CircleDollarSign
        },
      ]
    },
    {
      title: "Especial Pizzarias",
      icon: Pizza,
      colorClass: "text-orange-500",
      products: [
        { 
          name: "Queijo Mussarela Fatiado 1kg", 
          price: "R$ 39,90", 
          discount: "R$ 45,00", 
          supplier: "Laticínios Premium",
          colorClass: "bg-orange-500",
          icon: Pizza
        },
        { 
          name: "Molho de Tomate 2kg", 
          price: "R$ 15,90", 
          discount: "R$ 19,90", 
          supplier: "Sabor Italiano",
          colorClass: "bg-orange-500",
          icon: Pizza
        },
        { 
          name: "Calabresa Fatiada 1kg", 
          price: "R$ 28,50", 
          discount: "R$ 33,00", 
          supplier: "Frigorífico Central",
          colorClass: "bg-orange-500",
          icon: Pizza
        },
        { 
          name: "Farinha de Trigo 00 5kg", 
          price: "R$ 32,90", 
          discount: "R$ 38,90", 
          supplier: "Moinho Especial",
          colorClass: "bg-orange-500",
          icon: Pizza
        },
      ]
    },
    {
      title: "Especial Japonês",
      icon: Fish,
      colorClass: "text-cyan-500",
      products: [
        { 
          name: "Arroz para Sushi 5kg", 
          price: "R$ 62,90", 
          discount: "R$ 69,90", 
          supplier: "Importadora Ásia",
          colorClass: "bg-cyan-500",
          icon: Fish
        },
        { 
          name: "Nori Premium 100 folhas", 
          price: "R$ 108,90", 
          discount: "R$ 129,90", 
          supplier: "Japan Foods",
          colorClass: "bg-cyan-500",
          icon: Fish
        },
        { 
          name: "Shoyu Premium 1L", 
          price: "R$ 19,90", 
          discount: "R$ 24,50", 
          supplier: "Temperos Orientais",
          colorClass: "bg-cyan-500",
          icon: Fish
        },
        { 
          name: "Salmão Congelado 1kg", 
          price: "R$ 79,90", 
          discount: "R$ 89,90", 
          supplier: "Pescados Frescos",
          colorClass: "bg-cyan-500",
          icon: Fish
        },
      ]
    },
    {
      title: "Especial Hamburgueria",
      icon: Beef,
      colorClass: "text-red-500",
      products: [
        { 
          name: "Blend Premium 1kg", 
          price: "R$ 49,90", 
          discount: "R$ 56,90", 
          supplier: "Frigorífico Gourmet",
          colorClass: "bg-red-500",
          icon: Beef
        },
        { 
          name: "Queijo Cheddar Fatiado 1kg", 
          price: "R$ 45,90", 
          discount: "R$ 52,90", 
          supplier: "Laticínios Especiais",
          colorClass: "bg-red-500",
          icon: Beef
        },
        { 
          name: "Pão Brioche 6un", 
          price: "R$ 18,90", 
          discount: "R$ 21,90", 
          supplier: "Padaria Artesanal",
          colorClass: "bg-red-500",
          icon: Beef
        },
        { 
          name: "Bacon em Tiras 1kg", 
          price: "R$ 39,90", 
          discount: "R$ 45,90", 
          supplier: "Frigorífico Premium",
          colorClass: "bg-red-500",
          icon: Beef
        },
      ]
    },
    {
      title: "Especial Frutos do Mar",
      icon: Fish,
      colorClass: "text-blue-500",
      products: [
        { 
          name: "Camarão Limpo 1kg", 
          price: "R$ 89,90", 
          discount: "R$ 99,90", 
          supplier: "Frutos do Mar Express",
          colorClass: "bg-blue-500",
          icon: Fish
        },
        { 
          name: "Polvo Congelado 1kg", 
          price: "R$ 75,90", 
          discount: "R$ 85,90", 
          supplier: "Pescados Qualidade",
          colorClass: "bg-blue-500",
          icon: Fish
        },
        { 
          name: "Lula Limpa 1kg", 
          price: "R$ 58,90", 
          discount: "R$ 65,90", 
          supplier: "Frutos do Mar Express",
          colorClass: "bg-blue-500",
          icon: Fish
        },
        { 
          name: "Mexilhão Congelado 1kg", 
          price: "R$ 38,90", 
          discount: "R$ 45,90", 
          supplier: "Pescados Qualidade",
          colorClass: "bg-blue-500",
          icon: Fish
        },
      ]
    },
    {
      title: "Ofertas Relâmpago",
      icon: Clock,
      colorClass: "text-purple-500",
      products: [
        { 
          name: "Açúcar Refinado 5kg", 
          price: "R$ 17,90", 
          discount: "R$ 24,90", 
          supplier: "Atacado Central",
          colorClass: "bg-purple-500",
          icon: Clock
        },
        { 
          name: "Óleo de Soja 1L", 
          price: "R$ 5,99", 
          discount: "R$ 8,49", 
          supplier: "Distribuidor Alimentos",
          colorClass: "bg-purple-500",
          icon: Clock
        },
        { 
          name: "Café Premium 1kg", 
          price: "R$ 38,90", 
          discount: "R$ 45,90", 
          supplier: "Cafeteria Especial",
          colorClass: "bg-purple-500",
          icon: Clock
        },
        { 
          name: "Chocolate em Barra 1kg", 
          price: "R$ 32,50", 
          discount: "R$ 42,90", 
          supplier: "Confeitaria Premium",
          colorClass: "bg-purple-500",
          icon: Clock
        },
      ]
    },
  ];

  return (
    <div className="py-4">
      {categories.map((category, index) => (
        <CategorySection
          key={index}
          title={category.title}
          icon={category.icon}
          colorClass={category.colorClass}
          products={category.products}
        />
      ))}
    </div>
  );
}