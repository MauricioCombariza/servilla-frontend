import { useRoutes } from 'react-router-dom'
import { Calidad } from '../Pages/Calidad'
import { Contactenos } from '../Pages/Contactenos'
import { Cliente } from '../Pages/Historico/Cliente'
import { Dashboard } from '../Pages/Dashboard'
import { Servilla } from '../Pages/Historico/Servilla'
import { HomePage } from '../Pages/Home'
import { Ingresar } from '../Pages/Ingresar'
import { Mision } from '../Pages/Mision' 
import { Registrarse } from '../Pages/Registrarse'
import { Salir } from '../Pages/Salir'
import { Indice } from '../Pages/Indice'
import { Informes } from '../Pages/Informes'
import { InformesDisponibles } from '../Pages/InformesDisponibles'
import { Alistamiento } from '../Pages/Servicio/Alistamiento'
import { Distribucion } from '../Pages/Servicio/Distribucion'
import { Email } from '../Pages/Servicio/Email'
import { Fullfilment } from '../Pages/Servicio/Fullfilment'
import { NotFound } from '../Pages/NotFound/Index'
import { Impresion } from '../Pages/Servicio/Impresion'
import { Paqueteo } from '../Pages/Servicio/Paqueteo'
import { Vision } from '../Pages/Vision'
import { ProtectRoute } from '../Auth'

const AppRoutes = () => {
    const routes = useRoutes([
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/calidad",
        element: <Calidad />
      },
      {
        path: "/contactenos",
        element: <Contactenos />
      },
      {
        path: "/dashboard",
        element: <ProtectRoute><Dashboard /></ProtectRoute>
      },
      {
        path: "/indice",
        element: <ProtectRoute><Indice /></ProtectRoute>
      },
      {
        path: "/informes",
        element: <ProtectRoute><Informes /></ProtectRoute>
      },
      {
        path: "/informes/informes-disponibles",
        element: <ProtectRoute><InformesDisponibles /></ProtectRoute>
      },
      {
        path: "/historico/cliente",
        element: <ProtectRoute><Cliente /></ProtectRoute>
      },
      {
        path: "/historico/servilla",
        element: <ProtectRoute><Servilla /></ProtectRoute>
      },
      {
        path:"/ingresar",
        element: <Ingresar />
      },
      {
        path:"/mision",
        element: <Mision />
      },
      {
        path: "/registrarse",
        element: <Registrarse />
      },
      {
        path: "/salir",
        element: <ProtectRoute><Salir /></ProtectRoute>
      },
      {
        path: "/servicio/alistamiento",
        element: <Alistamiento />
      },
      {
        path: "/servicio/distribucion",
        element: <Distribucion />
      },
      {
        path: "/servicio/email",
        element: <Email />
      },
      {
        path: "/servicio/fullfilment",
        element: <Fullfilment />
      },
      {
        path: "/servicio/paqueteo",
        element: <Paqueteo />
      },
      {
        path: "/servicio/impresion",
        element: <Impresion />
      },
      {
        path: "/vision",
        element: <Vision />
      },
      {
        path: "/*",
        element: <NotFound />
      },
    ])
    return routes
  }

  export {AppRoutes}