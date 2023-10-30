import { AuthContextProps } from "../Auth"

export interface LoginType {
    auth: AuthContextProps,
    API: string
    email: string,
    password: string
}

export const COMPLETED_STATUS = "COMPLETED"
export const LOADING_STATUS = "LOADING"
export const ERROR_STATUS = "ERROR"

const usePostLogin = async (loginData: LoginType) => {
  
  const res = await fetch(loginData.API, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `email=${loginData.email}&password=${loginData.password}`,
  });
  const data = await res.json();
  const tokenActual = data.token["access token"];
  const userActual = data.user
  
  if (res.ok) {
    loginData.auth.login(tokenActual, userActual);
    return { answer: data["detail"], requestStatus: COMPLETED_STATUS };    
  } else {
    return { answer: data["detail"], requestStatus: ERROR_STATUS }
  }
  
};

export { usePostLogin, };

