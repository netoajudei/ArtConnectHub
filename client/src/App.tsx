import { Route, Switch, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/hooks/use-auth-context";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AuthPage from "@/pages/auth-page";
import Dashboard from "@/pages/dashboard";

// Componente para redirecionamento condicional
const LoginRedirect = () => {
  const { user, isLoading } = useAuth();
  
  // Enquanto estiver carregando, não redirecione
  if (isLoading) return null;
  
  // Se estiver autenticado, redirecione para o dashboard, caso contrário para a página inicial
  return user ? <Redirect to="/dashboard" /> : <Home />;
};

function Router() {
  return (
    <Switch>
      <Route path="/" component={LoginRedirect} />
      <Route path="/auth" component={() => <AuthPage />} />
      <Route path="/dashboard" component={() => <Dashboard />} />
      <Route path="/dashboard/:rest*" component={() => <Dashboard />} />
      <Route path="/:rest*" component={() => <NotFound />} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
