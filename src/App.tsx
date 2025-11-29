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

// V2 Routes
import IndexV2 from "./pages/v2/Index";
import AboutV2 from "./pages/v2/About";
import TeamV2 from "./pages/v2/Team";
import PracticeAreasV2 from "./pages/v2/PracticeAreas";
import CaseStudiesV2 from "./pages/v2/CaseStudies";
import InsightsV2 from "./pages/v2/Insights";
import ContactV2 from "./pages/v2/Contact";

// V3 Routes
import IndexV3 from "./pages/v3/Index";
import AboutV3 from "./pages/v3/About";
import TeamV3 from "./pages/v3/Team";
import PracticeAreasV3 from "./pages/v3/PracticeAreas";
import PracticeAreaDetailV3 from "./pages/v3/PracticeAreaDetail";
import CaseStudiesV3 from "./pages/v3/CaseStudies";
import InsightsV3 from "./pages/v3/Insights";
import ContactV3 from "./pages/v3/Contact";

// Admin Routes
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
          
          {/* V2 Routes - Curvy & Colorful Design */}
          <Route path="/v2" element={<IndexV2 />} />
          <Route path="/v2/about" element={<AboutV2 />} />
          <Route path="/v2/team" element={<TeamV2 />} />
          <Route path="/v2/practice-areas" element={<PracticeAreasV2 />} />
          <Route path="/v2/case-studies" element={<CaseStudiesV2 />} />
          <Route path="/v2/insights" element={<InsightsV2 />} />
          <Route path="/v2/contact" element={<ContactV2 />} />
          
          {/* V3 Routes - Strategic Legal Counsel Design */}
          <Route path="/v3" element={<IndexV3 />} />
          <Route path="/v3/about" element={<AboutV3 />} />
          <Route path="/v3/team" element={<TeamV3 />} />
          <Route path="/v3/practice-areas" element={<PracticeAreasV3 />} />
          <Route path="/v3/practice-areas/:slug" element={<PracticeAreaDetailV3 />} />
          <Route path="/v3/case-studies" element={<CaseStudiesV3 />} />
          <Route path="/v3/insights" element={<InsightsV3 />} />
          <Route path="/v3/contact" element={<ContactV3 />} />
          
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
