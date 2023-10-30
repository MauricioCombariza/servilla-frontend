import React, { useContext, createContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

interface User {
  email: string;
  username: string;
  company: number
  perfil: number
  activate: number
}

export interface AuthContextProps {
  authorized: boolean;
  user: User;
  token: string;
  setToken: (token: string) => void;
  login: (token: string
    , user: User
    ) => void;
  signup: () => void;
  logout: () => void;
  isMensajero: boolean,
  setIsMensajero: (isMensajero:boolean) => void
}

const AuthContext = createContext<AuthContextProps>({
  authorized: false,
  user: {
    email: '',
    username: '',
    company: 1,
    activate: 1,
    perfil: 1
  },
  token: '',
  setToken: () => {
    null
  },
  isMensajero: false,
  setIsMensajero: () => false,
  login: () => {
    null
  },
  signup: () => {
    null
  },
  logout: () => {
    null
  }
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    username: '',
    company: 1,
    activate: 1,
    perfil: 1
  })
  const [authorized, setAuthorized] = useState(false)
  const [token, setToken] = useState('')

  // Estado para mostrar o no el input en el formulario para filtrar este informe
  const [ isMensajero, setIsMensajero] = useState<boolean>(false)

  const login = (token: string
    , user: User
    ) => {
    setToken(token)
    setUser(user)
    setAuthorized(true)
    navigate("/indice");
  };
  const signup = () => {
    navigate("/indice")
  }
  const newToken = (token: string) => {
    setToken(token)
  }
  const newAuthorized = () =>{
    setAuthorized(true)
  }
  const logout = () => {
    setUser({
      email: '',
      username: '',
      company: 1,
      activate: 1,
      perfil: 1
    });
    navigate("/");
    setAuthorized(false)
    setToken('')
  };
  const auth = {
    authorized,
    user,
    newToken,
    newAuthorized,
    setToken,
    token,
    login,
    signup,
    logout,
    // Set de todas los input autorizados para los informes
    isMensajero,
    setIsMensajero,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth(): AuthContextProps {
  const auth = useContext<AuthContextProps>(AuthContext);
  return auth;
}

function ProtectRoute({ children }: { children: React.ReactNode }) {
  const auth = useAuth()
      if (!auth.authorized) {
      return <Navigate to="/ingresar" replace />;
    }
     return <>{children}</>
}

export { AuthProvider, useAuth, ProtectRoute };
