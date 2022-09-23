import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import ProtectedRouter from './validation/ProtectedRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="home/*" element={<ProtectedRouter />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
