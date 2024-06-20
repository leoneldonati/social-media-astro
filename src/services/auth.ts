import { post } from "../helpers/fetch";
import { authStore } from "../stores/auth";


async function signUp(payload: FormData) {
  try {
    const result = await post('auth?type=signup', payload)

    if (!result.ok) {
      authStore.set({ isAuth: false, userLogged: null, errors: result.error})
      return {
        hasSigned: false
      }
    }
    return {
      hasSigned: true
    }
    
  }
  catch (e) {
    authStore.set({ isAuth: false, userLogged: null, errors: e })
    return {
      hasSigned: false
    }
  }
}


export { signUp }