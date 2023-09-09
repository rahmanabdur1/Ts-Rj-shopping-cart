import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routers';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='container'>
      <ShoppingCartProvider>
    <RouterProvider router={router}></RouterProvider>
    </ShoppingCartProvider>
    </div>
  </React.StrictMode>,
)
