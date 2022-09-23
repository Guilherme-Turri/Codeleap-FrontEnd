import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Home from '../Components/Home/Home';
const ProtectedRouter = () => {
  const { logged } = useSelector((state) => state.loginUser);

  return logged ? <Home /> : <Navigate to="/" />;
};

export default ProtectedRouter;
