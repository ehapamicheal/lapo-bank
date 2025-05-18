import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import SideBar from './components/SideBar';
import Branches from './pages/branches/Branches';
import Roles from "./pages/roles/Roles";
import Users from "./pages/users/Users";
import CardScheme from "./pages/card-scheme/CardScheme";
import CardRequest from "./pages/card-request/CardRequest";
import CardProfile from "./pages/card-profile/CardProfile";
import Stock from "./pages/stock/Stock";
import ComplaintsLog from "./pages/complaints-log/ComplaintsLog";
import ComplaintsResolve from "./pages/complaints-resolve/ComplaintsResolve";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SideBar isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home onToggleSidebar={toggleSidebar} />} />
        <Route path="/branches" element={<Branches onToggleSidebar={toggleSidebar} />} />
        <Route path="/roles" element={<Roles onToggleSidebar={toggleSidebar} />} />
        <Route path="/users" element={<Users onToggleSidebar={toggleSidebar} />} />
        <Route path="/card-scheme" element={<CardScheme onToggleSidebar={toggleSidebar} />} />
        <Route path="/card-profile" element={<CardProfile onToggleSidebar={toggleSidebar} />} />
        <Route path="/card-request" element={<CardRequest onToggleSidebar={toggleSidebar} />} /> 
        <Route path="/stock" element={<Stock onToggleSidebar={toggleSidebar} />} />
        <Route path="/complaints-log" element={<ComplaintsLog onToggleSidebar={toggleSidebar} /> } />
        <Route path="/complaints-resolve" element={<ComplaintsResolve onToggleSidebar={toggleSidebar} /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App