import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Auth/Login/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";

import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Layout from "./components/Layout/Layout";

function App() {
  // const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginPage/>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Layout children={<Dashboard/>}/>
          }
        />

        <Route
          path="*"
          element={
            <Dashboard/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;