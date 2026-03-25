import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import './index.css';
import Registration from './pages/Registration';
import Checkout from './pages/Checkout';
import ContactForm from './pages/ContactForm';
import JobApplication from './pages/JobApplication';
import ProfileSettings from './pages/ProfileSettings';
import FinancialForm from './pages/FinancialForm';
import TechnicalForm from './pages/TechnicalForm';
import NicheDomainForm from './pages/NicheDomainForm';
import PersonalExtended from './pages/PersonalExtended';
import VehicleForm from './pages/VehicleForm';
import FieldDetectionTest from './pages/FieldDetectionTest';
import DetectionEngineTest from './pages/DetectionEngineTest';
import { ChevronLeft, ChevronRight, User, ShoppingCart, Mail, Briefcase, Settings, Landmark, Cpu, Layers, Globe, Car, FlaskConical, ScanSearch } from 'lucide-react';
import { FillKitProvider } from './FillKitProvider';
import SidebarControls from './components/SidebarControls';
import TopNav from './components/TopNav';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem('fillkit-sidebar-collapsed');
    return saved ? JSON.parse(saved) : false;
  });

  const toggleSidebar = () => {
    const newState = !sidebarCollapsed;
    setSidebarCollapsed(newState);
    localStorage.setItem('fillkit-sidebar-collapsed', JSON.stringify(newState));
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg transition-colors ${
      sidebarCollapsed ? 'justify-center px-2 py-2.5' : 'px-4 py-2.5'
    } ${
      isActive
        ? 'bg-gray-100 text-gray-900 font-medium border-l-2 border-blue-600'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className={`bg-white border-r border-gray-200 shrink-0 h-full overflow-y-auto transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        }`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              {!sidebarCollapsed && (
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Pages</span>
              )}
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle sidebar"
              >
                {sidebarCollapsed ? (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
            <nav className="space-y-1">
              <NavLink to="/" className={navLinkClass} title="Registration" end>
                <User className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Registration</span>}
              </NavLink>
              <NavLink to="/checkout" className={navLinkClass} title="Checkout">
                <ShoppingCart className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Checkout</span>}
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} title="Contact">
                <Mail className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Contact</span>}
              </NavLink>
              <NavLink to="/job-application" className={navLinkClass} title="Job Application">
                <Briefcase className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Job Application</span>}
              </NavLink>
              <NavLink to="/profile" className={navLinkClass} title="Profile Settings">
                <Settings className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Profile Settings</span>}
              </NavLink>
              <NavLink to="/field-detection-test" className={navLinkClass} title="Field Detection Test">
                <FlaskConical className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Field Detection Test</span>}
              </NavLink>
              <NavLink to="/detection-engine-test" className={navLinkClass} title="Detection Engine Test">
                <ScanSearch className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Detection Engine Test</span>}
              </NavLink>
              <NavLink to="/financial" className={navLinkClass} title="Financial">
                <Landmark className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Financial</span>}
              </NavLink>
              <NavLink to="/technical" className={navLinkClass} title="Technical">
                <Cpu className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Technical</span>}
              </NavLink>
              <NavLink to="/niche-domains" className={navLinkClass} title="Niche Domains">
                <Layers className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Niche Domains</span>}
              </NavLink>
              <NavLink to="/personal-extended" className={navLinkClass} title="Personal Extended">
                <Globe className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Personal Extended</span>}
              </NavLink>
              <NavLink to="/vehicle" className={navLinkClass} title="Vehicle">
                <Car className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && <span>Vehicle</span>}
              </NavLink>
              <SidebarControls collapsed={sidebarCollapsed} />
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto h-full">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/job-application" element={<JobApplication />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/field-detection-test" element={<FieldDetectionTest />} />
            <Route path="/detection-engine-test" element={<DetectionEngineTest />} />
            <Route path="/financial" element={<FinancialForm />} />
            <Route path="/technical" element={<TechnicalForm />} />
            <Route path="/niche-domains" element={<NicheDomainForm />} />
            <Route path="/personal-extended" element={<PersonalExtended />} />
            <Route path="/vehicle" element={<VehicleForm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FillKitProvider options={{
      mode: 'valid',
      watchMode: true,
      refill: true,
      provider: 'local',
      locale: 'en',
      ui: {
        enabled: true,
        position: 'bottom.center',
      },
    }}>
      <BrowserRouter basename="/react">
        <App />
      </BrowserRouter>
    </FillKitProvider>
  </StrictMode>
);
