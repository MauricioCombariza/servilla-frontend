import { BrowserRouter } from "react-router-dom"

import { NavBar } from "./components/NavBar/NavBarTailwind"
import { AppRoutes } from "./routes/listRoutes"
import { AuthProvider } from "./Auth"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}