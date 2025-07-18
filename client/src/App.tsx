import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Help from "@/pages/help";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Blog from "@/pages/blog";
import Community from "@/pages/community";
import ApiDocs from "@/pages/api-docs";
import DataProtection from "@/pages/data-protection";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/help" component={Help} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/blog" component={Blog} />
      <Route path="/community" component={Community} />
      <Route path="/api-docs" component={ApiDocs} />
      <Route path="/data-protection" component={DataProtection} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    initGA();
    
    // Force light mode by removing any dark class and preventing system preference override
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
    document.body.style.colorScheme = 'light';
    
    // Add mutation observer to prevent dark mode from being added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target as HTMLElement;
          if (target.classList.contains('dark')) {
            target.classList.remove('dark');
          }
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    observer.observe(document.body, { attributes: true });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
