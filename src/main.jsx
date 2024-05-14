import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import lenguajes from './data/languages.js'
import Vista from './vistas/vista.jsx'

//importar react router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = [

  {
    path: "/",
    element: <App />
  },
  {
    path: "React",
    element: <div>Pagina de inicio React</div>
  },
]

lenguajes.forEach((len) => {

  router.push({
    path: len.nombre,
    element: <Vista len={len}/>,
  });
});

const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
