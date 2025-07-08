
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookingFlow from "./pages/BookingFlow";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Customers from "./pages/Customers";
import Provider from "./pages/Provider";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
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
          <Route path="/booking" element={<BookingFlow />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/calendar" element={<Calendar />} />
          <Route path="/dashboard/customers" element={<Customers />} />
          <Route path="/dashboard/provider" element={<Provider />} />
          <Route path="/dashboard/services" element={<Services />} />
          <Route path="/dashboard/payment" element={<Payment />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/help" element={<Help />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
