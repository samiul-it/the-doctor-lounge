import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Signup from './Pages/Login/Signup/Signup';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Error from './Pages/Home/Error/Error';
import AvailService from './Pages/AvailService/AvailService';
import RequireAuth from './Utilities/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/:serviceName"
          element={
            <RequireAuth>
              <AvailService></AvailService>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Signup></Signup>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
