import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './router';

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        {
          publicRoutes.map(route => 
            <Route path={route.path} element={route.element} key={route.path}/>
          )
        }
      </Routes>
    </div>
  )
}