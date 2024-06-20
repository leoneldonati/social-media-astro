import { atom } from "nanostores";

interface AuthStore  {
  isAuth?: boolean;
  userLogged?: null | UserLogged;
  errors?: any
}
export const authStore = atom<AuthStore>({
  isAuth: false,
  userLogged: null,
  errors: {
    message: 'Esto es un error de prueba, por favor revísalo luego.'
  }
})