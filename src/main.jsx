import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'


import {
 
  RouterProvider
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
 






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-9/12 mx-auto '>
 
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
    </div>
 
  </React.StrictMode>,
)
