// import "./App.css";
// MUI Roboto FRONT
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Login/Signup/Signup";
import Login from "./Pages/Login/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Home/Error/Error";
import AvailService from "./Pages/AvailService/AvailService";
import RequireAuth from "./Utilities/RequireAuth/RequireAuth";
import Blog from "../src/Pages/Blog/Blog";
import About from "../src/Pages/About/About";
import Services from "./Pages/Home/Services/Services";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageServices from "./Pages/Dashboard/ManageServices/ManegServices";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Signup></Signup>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/services/:serviceName"
          element={
            <RequireAuth>
              <AvailService></AvailService>
            </RequireAuth>
          }
        ></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route
            path="manage-services"
            element={<ManageServices></ManageServices>}
          ></Route>
        </Route>
        <Route
          path="/services/service-detail/:service_id"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>

        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
