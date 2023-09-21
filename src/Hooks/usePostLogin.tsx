import { AuthContextProps } from "../Auth"

export interface LoginType {
    auth: AuthContextProps,
    API: string
    email: string,
    password: string
}

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
  const tokenActual = data["access token"];
  const userActual = data.user
  // console.log(data.user)
  if (res.ok) {
    await  loginData.auth.login(tokenActual, userActual);
  }
  const answer = data["detail"];
  return answer;
};

export { usePostLogin };

