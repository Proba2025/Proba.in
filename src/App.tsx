import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner"; // Renamed for clarity
import { Toaster } from "@/components/ui/toaster";

import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/landing";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import CodingChallenges from "./pages/CodingChallenges";
import ModeInterview from "./pages/Interview";
import ModeTest from "./pages/test";
import Projects from "./pages/Project";
import B2BSolutions from "./pages/B2BSolutions";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          {/* Notifications */}
          <Toaster />
          <Sonner />
          
          {/* Routing */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/dashboard/coding-challenges" element={<CodingChallenges />} />
              <Route path="/dashboard/mock-interviews" element={<ModeInterview />} />
              <Route path="/dashboard/mock-tests" element={<ModeTest />} />
              <Route path="/dashboard/projects" element={<Projects />} />
              <Route path="/dashboard/b2b" element={<B2BSolutions />} />
              
              {/* Catch-all route for 404 pages */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
