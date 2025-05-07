import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { externalApiRequest, EXTERNAL_API_URL } from "@/lib/queryClient";

// Tipo para representar os dados do usuário
export interface UserData {
  id: number;
  name: string;
  email: string;
  nome: string;
  nome_fantasia: string;
  foto?: string;
  logo?: string;
  validacao?: string;
  cidade?: string;
  estado?: string;
  telefoneDDD?: string;
  telefoneNumero?: string;
  // Outros campos conforme necessário
  [key: string]: any;
}

// Interface para o contexto de autenticação
interface AuthContextType {
  user: UserData | null;
  isLoading: boolean;
  error: Error | null;
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
  setUserData: (data: UserData) => void;
}

// Criação do contexto
const AuthContext = createContext<AuthContextType | null>(null);

// Chave para armazenamento do token no localStorage
const TOKEN_STORAGE_KEY = 'super_lista_auth_token';

// Provedor de autenticação
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Carregar token do localStorage ao iniciar
  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (storedToken) {
      setToken(storedToken);
      fetchUserData(storedToken).catch(console.error);
    }
  }, []);

  // Função para obter dados do usuário
  const fetchUserData = async (authToken: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${EXTERNAL_API_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`Erro ao obter dados do usuário: ${response.statusText}`);
      }
      
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro desconhecido'));
      console.error('Erro ao buscar dados do usuário:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para login com token
  const login = async (authToken: string) => {
    setToken(authToken);
    localStorage.setItem(TOKEN_STORAGE_KEY, authToken);
    await fetchUserData(authToken);
  };

  // Função para logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  };

  // Função para atualizar dados do usuário manualmente
  const setUserData = (data: UserData) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        token,
        login,
        logout,
        setUserData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar o contexto de autenticação
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}