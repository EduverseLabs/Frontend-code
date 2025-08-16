// import logo from './logo.svg';
import './App.css';
import DashBoard from './DashBoard.tsx';
import Login from './pages/Authentication/Login.tsx'
import Register from './pages/Authentication/Register.tsx'
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard/>}/>
          </Routes>

      </div>
    </div>
  );
}

export default App;
