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
  const gestion = () =>{ 
    const path = '/gestion_documentos'; 
    navigate(path);
    auth.setIsMensajero(true)
  }

    return (
  <Layout>
       <div className="container flex flex-col justify-around items-center w-2/3 mt-20 m-6">
       <Button
       onClick={gestion}
       variant="contained" color="success" size="large" fullWidth={true}>Gestión
       </Button>
       </div>
  </Layout>
    )
}

export {InformesDisponibles}