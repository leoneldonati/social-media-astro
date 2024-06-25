import { atom } from "nanostores";

interface AuthStore  {
  isAuth?: boolean;
  userLogged?: null | UserLogged;
  errors?: {
    message: string;
  } | null;
}
export const authStore = atom<AuthStore>({
  isAuth: false,
  userLogged: null,
  errors: null
})