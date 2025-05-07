import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth-context";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { externalApiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import {
  CalendarClock,
  CheckCircle,
  Clock,
  FilePen,
  FileText,
  ListChecks,
  MoreVertical,
  Plus,
  ShoppingCart,
  Trash2,
  Users,
  Search
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Tipo para representar uma lista de compras
interface ShoppingList {
  id: string;
  created_at: string;
  dataDeModificacao: number;
  deletado: boolean;
  disponivelCotacao: boolean;
  fimDaCotacao: number;
  lista_fechada: boolean;
  lista_pronta: boolean;
  nome: string;
  pedidosEnviados: string[];
  permicao_para_editar: number[];
  permicao_para_visualizar: number[];
  produtos: number[];
  proprietarioDaLista: number;
  vendedoresfornecedor_id: string[];
  visivel: boolean;
  listaAtual: string;
  pedidosAntigos: string[];
  produtos_ok: number[];
  vendedoresCandidatos_id: string[];
  cotacoesFinalizadas_id: string[];
}

// Componente de cartão para uma lista de compras
function ShoppingListCard({
  list,
  onDelete,
  onEdit,
  onOpenList
}: {
  list: ShoppingList;
  onDelete: (id: string) => void;
  onEdit: (list: ShoppingList) => void;
  onOpenList: (list: ShoppingList) => void;
}) {
  // Formatador de data
  const formatDate = (timestamp: string | number) => {
    const date = new Date(typeof timestamp === 'string' ? parseInt(timestamp) : timestamp);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  };

  // Verificar se a lista está fechada ou em cotação
  const isPending = list.disponivelCotacao && !list.lista_fechada;
  const isComplete = list.lista_fechada;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-['Bangers'] text-xl truncate">{list.nome}</CardTitle>
            <CardDescription className="font-['Comic_Neue']">
              Criada em {formatDate(list.created_at)}
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
                <span className="sr-only">Ações</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="font-['Comic_Neue']">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onOpenList(list)}>
                <ListChecks className="mr-2 h-4 w-4" />
                Abrir Lista
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(list)}>
                <FilePen className="mr-2 h-4 w-4" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="text-red-500 focus:text-red-500" 
                onClick={() => onDelete(list.id)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {isPending && (
            <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">
              <Clock className="mr-1 h-3 w-3" /> Em cotação
            </Badge>
          )}
          {isComplete && (
            <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
              <CheckCircle className="mr-1 h-3 w-3" /> Concluída
            </Badge>
          )}
          {!isPending && !isComplete && (
            <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
              <FileText className="mr-1 h-3 w-3" /> Em edição
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="font-['Comic_Neue'] text-sm flex-grow">
        <div className="space-y-3">
          <div className="flex items-center">
            <ShoppingCart className="h-4 w-4 text-gray-500 mr-2" />
            <span>{list.produtos.length} produtos</span>
          </div>
          {list.disponivelCotacao && (
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-500 mr-2" />
              <span>{list.vendedoresCandidatos_id.length} fornecedores</span>
            </div>
          )}
          <div className="flex items-center">
            <CalendarClock className="h-4 w-4 text-gray-500 mr-2" />
            <span>Modificada em {formatDate(list.dataDeModificacao)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          className="w-full font-['Comic_Neue']"
          onClick={() => onOpenList(list)}
        >
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}

// Componente para criar nova lista
function NewListDialog({ onCreateList }: { onCreateList: (name: string) => void }) {
  const [open, setOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [publicList, setPublicList] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (listName.trim()) {
      onCreateList(listName);
      setListName("");
      setPublicList(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="font-['Comic_Neue']">
          <Plus className="mr-2 h-4 w-4" />
          Nova Lista
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-['Bangers'] text-xl">Criar Nova Lista</DialogTitle>
          <DialogDescription className="font-['Comic_Neue']">
            Dê um nome para sua nova lista de compras.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-['Comic_Neue']">Nome da Lista</Label>
            <Input
              id="name"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              placeholder="ex: Compras do Mês"
              className="font-['Comic_Neue']"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="public" 
              checked={publicList} 
              onCheckedChange={(checked) => setPublicList(checked === true)}
            />
            <Label 
              htmlFor="public" 
              className="font-['Comic_Neue'] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Lista pública (visível para outros usuários)
            </Label>
          </div>
          <DialogFooter>
            <Button type="submit" className="font-['Comic_Neue']">Criar Lista</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function ListasPage() {
  const [lists, setLists] = useState<ShoppingList[]>([]);
  const [filteredLists, setFilteredLists] = useState<ShoppingList[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  const [, navigate] = useLocation();

  // Carregar listas do usuário
  useEffect(() => {
    const fetchLists = async () => {
      try {
        setIsLoading(true);
        // Exemplo com dados simulados
        const mockLists: ShoppingList[] = [
          {
            id: "1",
            created_at: Date.now().toString(),
            dataDeModificacao: Date.now(),
            deletado: false,
            disponivelCotacao: false,
            fimDaCotacao: 0,
            lista_fechada: false,
            lista_pronta: false,
            nome: "Compras de Janeiro",
            pedidosEnviados: [],
            permicao_para_editar: [user?.id || 0],
            permicao_para_visualizar: [user?.id || 0],
            produtos: [1, 2, 3, 4, 5],
            proprietarioDaLista: user?.id || 0,
            vendedoresfornecedor_id: [],
            visivel: true,
            listaAtual: "",
            pedidosAntigos: [],
            produtos_ok: [],
            vendedoresCandidatos_id: [],
            cotacoesFinalizadas_id: []
          },
          {
            id: "2",
            created_at: (Date.now() - 7 * 24 * 60 * 60 * 1000).toString(),
            dataDeModificacao: Date.now() - 2 * 24 * 60 * 60 * 1000,
            deletado: false,
            disponivelCotacao: true,
            fimDaCotacao: Date.now() + 3 * 24 * 60 * 60 * 1000,
            lista_fechada: false,
            lista_pronta: true,
            nome: "Compras Semanais",
            pedidosEnviados: ["order1"],
            permicao_para_editar: [user?.id || 0],
            permicao_para_visualizar: [user?.id || 0, 2, 3],
            produtos: [6, 7, 8, 9, 10, 11, 12],
            proprietarioDaLista: user?.id || 0,
            vendedoresfornecedor_id: ["vendor1", "vendor2"],
            visivel: true,
            listaAtual: "current",
            pedidosAntigos: [],
            produtos_ok: [6, 8, 9],
            vendedoresCandidatos_id: ["vendor1", "vendor2", "vendor3"],
            cotacoesFinalizadas_id: []
          },
          {
            id: "3",
            created_at: (Date.now() - 30 * 24 * 60 * 60 * 1000).toString(),
            dataDeModificacao: Date.now() - 15 * 24 * 60 * 60 * 1000,
            deletado: false,
            disponivelCotacao: false,
            fimDaCotacao: Date.now() - 10 * 24 * 60 * 60 * 1000,
            lista_fechada: true,
            lista_pronta: true,
            nome: "Produtos de Limpeza",
            pedidosEnviados: ["order2", "order3"],
            permicao_para_editar: [user?.id || 0],
            permicao_para_visualizar: [user?.id || 0],
            produtos: [13, 14, 15, 16],
            proprietarioDaLista: user?.id || 0,
            vendedoresfornecedor_id: ["vendor4"],
            visivel: true,
            listaAtual: "",
            pedidosAntigos: ["old1", "old2"],
            produtos_ok: [13, 14, 15, 16],
            vendedoresCandidatos_id: ["vendor4", "vendor5"],
            cotacoesFinalizadas_id: ["quote1"]
          }
        ];

        // Quando a API estiver pronta, substituir por chamada real:
        // const response = await externalApiRequest("GET", "/listas");
        // const data = await response.json();
        // setLists(data);

        setLists(mockLists);
        setFilteredLists(mockLists);
      } catch (error) {
        console.error("Erro ao carregar listas:", error);
        toast({
          title: "Erro ao carregar listas",
          description: "Não foi possível carregar suas listas de compras.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchLists();
    }
  }, [user, toast]);

  // Função para filtrar listas pelo termo de busca
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredLists(lists);
    } else {
      const filtered = lists.filter(list => 
        list.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLists(filtered);
    }
  }, [searchTerm, lists]);

  // Criar nova lista
  const handleCreateList = async (name: string) => {
    try {
      // Exemplo com dados simulados
      const newList: ShoppingList = {
        id: Date.now().toString(),
        created_at: Date.now().toString(),
        dataDeModificacao: Date.now(),
        deletado: false,
        disponivelCotacao: false,
        fimDaCotacao: 0,
        lista_fechada: false,
        lista_pronta: false,
        nome: name,
        pedidosEnviados: [],
        permicao_para_editar: [user?.id || 0],
        permicao_para_visualizar: [user?.id || 0],
        produtos: [],
        proprietarioDaLista: user?.id || 0,
        vendedoresfornecedor_id: [],
        visivel: true,
        listaAtual: "",
        pedidosAntigos: [],
        produtos_ok: [],
        vendedoresCandidatos_id: [],
        cotacoesFinalizadas_id: []
      };

      // Quando a API estiver pronta, substituir por chamada real:
      // const response = await externalApiRequest("POST", "/listas", { nome: name });
      // const data = await response.json();
      
      setLists([newList, ...lists]);
      toast({
        title: "Lista criada",
        description: `A lista "${name}" foi criada com sucesso!`,
      });
    } catch (error) {
      console.error("Erro ao criar lista:", error);
      toast({
        title: "Erro ao criar lista",
        description: "Não foi possível criar a nova lista.",
        variant: "destructive",
      });
    }
  };

  // Excluir lista
  const handleDeleteList = async (id: string) => {
    try {
      // Quando a API estiver pronta, substituir por chamada real:
      // await externalApiRequest("DELETE", `/listas/${id}`);
      
      setLists(lists.filter(list => list.id !== id));
      toast({
        title: "Lista excluída",
        description: "A lista foi excluída com sucesso.",
      });
    } catch (error) {
      console.error("Erro ao excluir lista:", error);
      toast({
        title: "Erro ao excluir lista",
        description: "Não foi possível excluir a lista.",
        variant: "destructive",
      });
    }
  };

  // Editar lista
  const handleEditList = (list: ShoppingList) => {
    // Quando tivermos uma página de edição, navegar para ela
    // navigate(`/dashboard/listas/${list.id}/edit`);
    
    // Por enquanto, só exibir um toast
    toast({
      title: "Editar lista",
      description: `Edição da lista "${list.nome}" será implementada em breve.`,
    });
  };

  // Abrir lista de compras
  const handleOpenList = (list: ShoppingList) => {
    // Quando tivermos uma página de detalhes, navegar para ela
    // navigate(`/dashboard/listas/${list.id}`);
    
    // Por enquanto, só exibir um toast
    toast({
      title: "Abrir lista",
      description: `Lista "${list.nome}" selecionada para visualização.`,
    });
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-['Bangers'] text-gray-800">Minhas Listas</h1>
              <p className="text-gray-500 font-['Comic_Neue']">
                Gerencie suas listas de compras
              </p>
            </div>
            <NewListDialog onCreateList={handleCreateList} />
          </div>
          
          {/* Filtro de busca */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar listas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 font-['Comic_Neue']"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 h-5 w-5" />
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="h-60">
                  <CardHeader>
                    <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                  </CardContent>
                  <CardFooter>
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : filteredLists.length === 0 ? (
            <Card className="p-8 text-center">
              <div className="flex flex-col items-center">
                <ListChecks className="h-16 w-16 text-gray-300 mb-4" />
                {searchTerm ? (
                  <>
                    <h3 className="text-xl font-['Bangers'] text-gray-600 mb-2">
                      Nenhuma lista encontrada
                    </h3>
                    <p className="text-gray-500 font-['Comic_Neue']">
                      Não encontramos nenhuma lista com o termo "{searchTerm}".
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-['Bangers'] text-gray-600 mb-2">
                      Você ainda não tem listas
                    </h3>
                    <p className="text-gray-500 font-['Comic_Neue'] mb-4">
                      Crie sua primeira lista de compras para começar!
                    </p>
                    <NewListDialog onCreateList={handleCreateList} />
                  </>
                )}
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLists.map((list) => (
                <ShoppingListCard
                  key={list.id}
                  list={list}
                  onDelete={handleDeleteList}
                  onEdit={handleEditList}
                  onOpenList={handleOpenList}
                />
              ))}
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}