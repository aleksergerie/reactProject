import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import HistoryPage from "./pages/History";
import CoachesPage from "./pages/Coaches";
import ContactPage from "./pages/Contact";
import TechniquesPage from "./pages/Techniques";

import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/techniques" element={<TechniquesPage />} />
      </Routes>
    </div>
  );
}

export default App;
