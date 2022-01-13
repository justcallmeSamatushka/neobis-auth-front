import React from 'react'
import './App.css'
import { Input } from 'antd';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router';

export const App = () => {
  const auth = false;
  return (
    <div className='App'>
      {
        auth ?
          <Routes>
            {
              privateRoutes.map(route => 
                <Route path={route.path} element={route.element} key={route.path}/> 
              )
            }
          </Routes>
        :
          <Routes>
            {
              publicRoutes.map(route => 
                <Route path={route.path} element={route.element} key={route.path}/>
              )
            }
          </Routes>
      }
    </div>
  )
}