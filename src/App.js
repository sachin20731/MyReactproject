import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from './pages/Profile';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Register />} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} />
    <Route exact path="/profile" element={<Profile />} />
    
        
     
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
