import React from "react";
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
import Agreement from "@/pages/agreement";
import UserRights from "@/pages/user-rights";
import Protection from "@/pages/protection";
import Limitations from "@/pages/limitations";
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
      <Route path="/terms/agreement" component={Agreement} />
      <Route path="/terms/user-rights" component={UserRights} />
      <Route path="/terms/protection" component={Protection} />
      <Route path="/terms/limitations" component={Limitations} />
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
    
    // Force light mode completely
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.colorScheme = 'light';
    document.body.style.colorScheme = 'light';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    
    // Add meta tag to prevent dark mode
    const meta = document.createElement('meta');
    meta.name = 'color-scheme';
    meta.content = 'light only';
    document.head.appendChild(meta);
    
    // Monitor and prevent dark mode changes
    const observer = new MutationObserver(() => {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
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
