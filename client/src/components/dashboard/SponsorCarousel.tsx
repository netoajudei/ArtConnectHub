import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Megaphone, ShoppingBag, Utensils, Pizza, ShoppingBasket, Fish } from "lucide-react";

// Dados simulados para os banners
const banners = [
  {
    id: 1,
    title: "Promoção de Verão",
    description: "Desconto especial em frutas e legumes",
    color: "bg-amber-500",
    icon: ShoppingBasket,
  },
  {
    id: 2,
    title: "Festival de Carnes",
    description: "As melhores ofertas para seu churrasco",
    color: "bg-red-500",
    icon: Utensils,
  },
  {
    id: 3,
    title: "Semana do Fornecedor",
    description: "Grandes descontos dos parceiros premium",
    color: "bg-blue-500",
    icon: ShoppingBag,
  },
  {
    id: 4,
    title: "Especial Pizzarias",
    description: "Promoções em insumos para pizzarias",
    color: "bg-orange-500",
    icon: Pizza,
  },
  {
    id: 5,
    title: "Frutos do Mar",
    description: "Produtos frescos para seu restaurante",
    color: "bg-cyan-500",
    icon: Fish,
  }
];

export default function SponsorCarousel() {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-['Bangers'] text-gray-800 flex items-center">
          <Megaphone className="mr-2 h-5 w-5 text-primary" />
          Patrocinadores em Destaque
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="md:basis-1/2 lg:basis-1/3">
              <div className={cn(
                "h-48 rounded-xl p-6 flex flex-col justify-between text-white overflow-hidden relative",
                banner.color
              )}>
                <div className="z-10">
                  <h3 className="text-2xl font-['Bangers'] mb-2">{banner.title}</h3>
                  <p className="font-['Comic_Neue']">{banner.description}</p>
                </div>

                <button className="mt-4 bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-md z-10 self-start transition-colors font-['Comic_Neue']">
                  Ver mais
                </button>

                <banner.icon className="absolute right-4 bottom-4 h-32 w-32 opacity-20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}