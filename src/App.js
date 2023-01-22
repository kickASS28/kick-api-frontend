import { useState } from "react";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsagePage from "./pages/Usage";
import CommunityPage from "./pages/CommunityPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const [active, setActive] = useState("Users API");
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/usage"
          element={<UsagePage active={active} setActive={setActive} />}
        />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
