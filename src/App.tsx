import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Auth/Login/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";

import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/login"
    //       element={
    //         isAuthenticated ? (
    //           <Navigate to="/dashboard" />
    //         ) : (
    //           <LoginPage />
    //         )
    //       }
    //     />

    //     <Route
    //       path="/dashboard"
    //       element={
    //         isAuthenticated ? (
    //           <Dashboard />
    //         ) : (
    //           <Navigate to="/dashboard" />
    //         )
    //       }
    //     />

    //     <Route
    //       path="*"
    //       element={
    //         <Navigate
    //           to={isAuthenticated ? "/dashboard" : "/dashboard"}
    //         />
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    // <Dashboard/>
    <Sidebar/>
  );
}

export default App;