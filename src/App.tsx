import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Writing from "./pages/Writing";
import PricingTechnology from "./pages/blog/PricingTechnology";
import DataDrivenDecisions from "./pages/blog/DataDrivenDecisions";
import TurkeyDigitalEconomy from "./pages/blog/TurkeyDigitalEconomy";
import SlowCooking from "./pages/blog/SlowCooking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/blog/pricing-technology" element={<PricingTechnology />} />
          <Route path="/blog/data-driven-decisions" element={<DataDrivenDecisions />} />
          <Route path="/blog/turkey-digital-economy" element={<TurkeyDigitalEconomy />} />
          <Route path="/blog/slow-cooking" element={<SlowCooking />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
