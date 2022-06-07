import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../pages/signup";


export default function AppRouter() {
  return (
    <Router>
      <Routes>
          
        
          <Route path="/signup" element={<SignUp />} />
        
     </Routes>
    </Router>
  );
}
