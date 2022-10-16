import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import FormGenero from "./pages/FormGenero";

export function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/FormGender" element={<FormGenero />}/>
      </Routes>
    </Router>
  )
}
