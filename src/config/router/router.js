import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../pages/signup";
import Login from "../pages/login";
import { Dashboard } from "@mui/icons-material";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
          
        
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          
          
     </Routes>
    </Router>
  );
}
