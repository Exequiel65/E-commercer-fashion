import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import { useSelector } from 'react-redux'


const AppRouter = () => {
    const estado = useSelector((state) => state);
    console.log(estado.auth.user)
    return (
        <Routes>
            <Route path='/login' element={ estado.auth.user ? <Navigate to='/' /> : <Login />} />
            <Route path='/register' element={estado.auth.user ? <Navigate to='/' /> : <Register />} />
        </Routes>
    );
}

export default AppRouter;
