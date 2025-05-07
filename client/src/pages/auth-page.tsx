import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { externalApiRequest, EXTERNAL_API_URL } from "@/lib/queryClient";
import { useAuth } from "@/hooks/use-auth-context";

// Esquemas de validação
const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

const cadastroSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmarSenha: z.string().min(6, "A confirmação de senha é necessária"),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type CadastroFormValues = z.infer<typeof cadastroSchema>;

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<string>("entrar");
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [conviteCode, setConviteCode] = useState<string>("");
  const { login } = useAuth();
  
  // Extrair o código de convite da URL, se houver
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const convite = urlParams.get('convite');
    if (convite) {
      setConviteCode(convite);
      // Muda a aba para cadastro quando um convite é detectado
      setActiveTab("cadastrar");
    }
  }, []);
  
  // Mutation para cadastro
  const signupMutation = useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      password: string;
      convite: string;
    }) => {
      const response = await externalApiRequest(
        "POST", 
        "/auth/signup", 
        data
      );
      return await response.json();
    },
    onSuccess: (data) => {
      // Verifica se o token JWT foi retornado
      if (data.authToken) {
        // Armazena o token e busca os dados do usuário
        login(data.authToken);
        
        toast({
          title: "Cadastro realizado",
          description: "Sua conta foi criada com sucesso!",
          variant: "default",
        });
        
        // Redireciona o usuário para a página inicial após o login
        setTimeout(() => {
          setLocation("/");
        }, 2000);
      } else {
        toast({
          title: "Erro no cadastro",
          description: "Não foi possível obter o token de autenticação.",
          variant: "destructive",
        });
      }
    },
    onError: (error: Error) => {
      toast({
        title: "Erro no cadastro",
        description: error.message || "Ocorreu um erro ao criar sua conta. Tente novamente.",
        variant: "destructive",
      });
    }
  });
  
  // Formulário de login
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  // Formulário de cadastro
  const cadastroForm = useForm<CadastroFormValues>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    },
  });

  // Mutation para login
  const loginMutation = useMutation({
    mutationFn: async (data: {
      email: string;
      password: string;
    }) => {
      const response = await fetch(`${EXTERNAL_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Falha ao fazer login');
      }
      
      return await response.json();
    },
    onSuccess: (data) => {
      // Verifica se o token JWT foi retornado
      if (data.authToken) {
        // Armazena o token e busca os dados do usuário
        login(data.authToken);
        
        toast({
          title: "Login realizado",
          description: "Bem-vindo de volta!",
          variant: "default",
        });
        
        // Redireciona o usuário para a página inicial após o login
        setTimeout(() => {
          setLocation("/");
        }, 2000);
      } else {
        toast({
          title: "Erro no login",
          description: "Não foi possível obter o token de autenticação.",
          variant: "destructive",
        });
      }
    },
    onError: (error: Error) => {
      toast({
        title: "Erro no login",
        description: error.message || "Verifique suas credenciais e tente novamente.",
        variant: "destructive",
      });
    }
  });

  // Função para submissão do login
  const onLoginSubmit = (values: LoginFormValues) => {
    loginMutation.mutate({
      email: values.email,
      password: values.senha
    });
  };

  // Função para submissão do cadastro
  const onCadastroSubmit = (values: CadastroFormValues) => {
    // Mapear os campos do formulário para o formato esperado pela API
    signupMutation.mutate({
      name: values.nome,
      email: values.email,
      password: values.senha,
      convite: conviteCode,
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Formulário */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img 
              src="/attached_assets/logo_with_name.png" 
              alt="Super Lista Logo" 
              className="h-24 mx-auto mb-6"
            />
            <h2 className="font-['Bangers'] text-4xl text-primary mb-2">
              {activeTab === "entrar" ? "Entrar" : "Cadastrar"}
            </h2>
            <p className="font-['Comic_Neue'] text-lg">
              {activeTab === "entrar" 
                ? "Bem-vindo de volta, super herói!" 
                : "Junte-se aos super heróis de compras!"}
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="entrar" className="font-['Comic_Neue'] font-bold">Entrar</TabsTrigger>
              <TabsTrigger value="cadastrar" className="font-['Comic_Neue'] font-bold">Cadastrar</TabsTrigger>
            </TabsList>
            
            {/* Conteúdo da aba de login */}
            <TabsContent value="entrar">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Comic_Neue'] font-bold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage className="font-['Comic_Neue']" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={loginForm.control}
                    name="senha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Comic_Neue'] font-bold">Senha</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="********" {...field} />
                        </FormControl>
                        <FormMessage className="font-['Comic_Neue']" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full font-['Bangers'] text-xl py-6"
                    disabled={loginMutation.isPending}
                  >
                    {loginMutation.isPending ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                        PROCESSANDO...
                      </>
                    ) : "ENTRAR"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            {/* Conteúdo da aba de cadastro */}
            <TabsContent value="cadastrar">
              <Form {...cadastroForm}>
                <form onSubmit={cadastroForm.handleSubmit(onCadastroSubmit)} className="space-y-6">
                  <FormField
                    control={cadastroForm.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Comic_Neue'] font-bold">Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage className="font-['Comic_Neue']" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={cadastroForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Comic_Neue'] font-bold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage className="font-['Comic_Neue']" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={cadastroForm.control}
                    name="senha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Comic_Neue'] font-bold">Senha</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="********" {...field} />
                        </FormControl>
                        <FormMessage className="font-['Comic_Neue']" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={cadastroForm.control}
                    name="confirmarSenha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Comic_Neue'] font-bold">Confirmar Senha</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="********" {...field} />
                        </FormControl>
                        <FormMessage className="font-['Comic_Neue']" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full font-['Bangers'] text-xl py-6"
                    disabled={signupMutation.isPending}
                  >
                    {signupMutation.isPending ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                        PROCESSANDO...
                      </>
                    ) : "CADASTRAR"}
                  </Button>
                  
                  {conviteCode && (
                    <p className="text-center mt-2 text-sm font-['Comic_Neue'] text-primary">
                      Cadastro com convite: <span className="font-bold">{conviteCode}</span>
                    </p>
                  )}
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Hero section / Imagem lateral */}
      <div className="hidden md:block w-1/2 bg-primary">
        <div className="h-full flex flex-col items-center justify-center text-white p-10">
          <h1 className="font-['Bangers'] text-6xl text-center mb-6">
            Super Poderes para suas Compras!
          </h1>
          <div className="font-['Comic_Neue'] text-xl text-center max-w-lg space-y-6">
            <p>
              O Super Lista é o aplicativo que está transformando a forma como estabelecimentos 
              de alimentos fazem suas compras no Brasil.
            </p>
            <p>
              Registre-se hoje e junte-se aos super-heróis que economizam tempo e dinheiro,
              com orçamentos simplificados e as melhores ofertas de fornecedores.
            </p>
            <div className="flex flex-col items-center pt-6">
              <div className="flex space-x-2 items-center mb-2">
                <span className="bg-secondary rounded-full w-4 h-4 flex items-center justify-center text-black">✓</span>
                <p className="font-bold">Orçamentos com um clique</p>
              </div>
              <div className="flex space-x-2 items-center mb-2">
                <span className="bg-secondary rounded-full w-4 h-4 flex items-center justify-center text-black">✓</span>
                <p className="font-bold">Compare preços facilmente</p>
              </div>
              <div className="flex space-x-2 items-center mb-2">
                <span className="bg-secondary rounded-full w-4 h-4 flex items-center justify-center text-black">✓</span>
                <p className="font-bold">Economize tempo nas compras</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}