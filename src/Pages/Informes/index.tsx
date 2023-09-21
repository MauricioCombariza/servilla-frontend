import { Layout } from "../../components/Layout"
import { InformesForm } from "../../components/InformesForm"
import { useAuth } from "../../Auth" 
import { Navigate } from "react-router-dom"

const Informes: () => JSX.Element | null = () => {
  const auth = useAuth()
  const perfil = auth.user.perfil

  return (
    perfil &&
    perfil > 1 ? (
      <Layout>
        <InformesForm />
      </Layout>
    )
  :
  <Navigate to="/login" replace={true} />
  )
}

export  {Informes}
