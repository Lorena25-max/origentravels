import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Tours from "../pages/Tours";
import Contact from "../pages/Contact";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics"

import ProtectedRoute from "../components/protected/ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/tours" element={<Tours />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      
      <Route path="/analytics" element={<Analytics />}/>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRouter;
