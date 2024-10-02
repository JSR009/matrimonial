'use client';
import React, { useState } from "react";
import AdminLogin from "@/components/AdminLogin";// Adjust the path as necessary
import Dashboard from "../../../components/Dashboard";// Adjust the path as necessary

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Update the logged-in state
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard /> // Show the Dashboard if logged in
      ) : (
        <AdminLogin onLogin={handleLogin} /> // Show AdminLogin if not logged in
      )}
    </div>
  );
};

export default AdminPage;
