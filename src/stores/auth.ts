import { atom } from "nanostores";

interface AuthStore  {
  isAuth: boolean;
  userLogged: null | object;
  errors: any
}
export const authStore = atom<AuthStore>({
  isAuth: false,
  userLogged: null,
  errors: null
})