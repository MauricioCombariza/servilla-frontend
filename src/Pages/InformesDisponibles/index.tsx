import { useAuth } from "../../Auth"
import { Layout } from "../../components/Layout"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const InformesDisponibles: () => JSX.Element | null = () => {

  const auth = useAuth()
  const navigate = useNavigate()
  const pendientesMensajeros = () =>{ 
    const path = '/informes'; 
    navigate(path);
    auth.setIsMensajero(true)
  }

    return (
  <Layout>
       <div className="container flex justify-center items-center w-2/3 mt-20 m-6">
       <Button
       onClick={pendientesMensajeros}
       variant="contained" color="success" size="large" fullWidth={true}>Pendientes por mensajero
       </Button>
       </div>
  </Layout>
    )
}

export {InformesDisponibles}