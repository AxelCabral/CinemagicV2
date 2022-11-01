import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import FormGender from "./pages/FormGender/FormGender";
import Login from "./pages/Login/Login";
import FormMovie from "./pages/FormMovie/FormMovie";
import FormSession from "./pages/FormSession/FormSession";
import FormUser from "./pages/FormUser/FormUser";

export function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/FormGender" element={<FormGender />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/FormMovie" element={<FormMovie />}/>
        <Route path="/FormSession" element={<FormSession />}/>
        <Route path="/FormUser" element={<FormUser />}/>
      </Routes>
    </Router>
  )
}
