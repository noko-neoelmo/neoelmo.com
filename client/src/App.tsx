import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/hooks/use-language";
import LoadingScreen from "@/components/loading-screen";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="neo-elmo-ui-theme">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            {isLoading ? (
              <LoadingScreen onComplete={() => setIsLoading(false)} />
            ) : (
              <Router />
            )}
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
