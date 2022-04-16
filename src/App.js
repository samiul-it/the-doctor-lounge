import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <h1>Welcome to Doctor Lounge</h1>
      <p>The site is under development,we will get back to you soon...</p>
      <h6>Thank You for your patience!</h6>
    </div>
  );
}

export default App;
