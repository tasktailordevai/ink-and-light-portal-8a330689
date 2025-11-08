import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PracticeAreas from "./pages/PracticeAreas";
import PracticeAreaDetail from "./pages/PracticeAreaDetail";
import Team from "./pages/Team";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./backend/AdminLogin";
import AdminLayout from "./backend/AdminLayout";
import Dashboard from "./backend/Dashboard";
import PostsList from "./backend/posts/PostsList";
import PostEditor from "./backend/posts/PostEditor";
import CaseStudiesList from "./backend/case-studies/CaseStudiesList";
import AttorneysList from "./backend/attorneys/AttorneysList";
import MediaLibrary from "./backend/media/MediaLibrary";
import FormSubmissions from "./backend/forms/FormSubmissions";
import Settings from "./backend/settings/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="posts" element={<PostsList />} />
            <Route path="posts/new" element={<PostEditor />} />
            <Route path="case-studies" element={<CaseStudiesList />} />
            <Route path="attorneys" element={<AttorneysList />} />
            <Route path="media" element={<MediaLibrary />} />
            <Route path="forms" element={<FormSubmissions />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
