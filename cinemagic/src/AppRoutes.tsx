import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Pag1 from "./pages/Pag1";
import Pag2 from "./pages/Pag2";

export function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/pag1" element={<Pag1 />}/>
        <Route path="/pag2" element={<Pag2 />}/>
      </Routes>
    </Router>
  )
}
