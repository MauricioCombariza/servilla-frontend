import { Layout } from "../../../components/Layout"
import { SearchedForm } from "../../../components/SearchedForm"
import { useAuth } from "../../../Auth"
import { Navigate } from "react-router-dom"

const Servilla: () => JSX.Element | null = () => {
  const auth = useAuth()
  const perfil = auth.user.perfil
  
  return (
  perfil && perfil > 2?
    
      <Layout>
        <div>
        <SearchedForm />
      </div>
      </Layout>
    
  :
  <Navigate to="/login" replace={true} />
  
)
  }

export  {Servilla}

