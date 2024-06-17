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

async function logIn (payload: FormData) {
  try {
    const result = await post('auth?type=login', payload)

    if (!result.ok) {
      authStore.set({ isAuth: false, userLogged: null, errors: result.error })
      return {
        hasLogged: false
      }
    }

    authStore.set({ isAuth: true, userLogged: result.data, errors: null })
    return {
      hasLogged: true
    }

  }
  catch (e) {
    authStore.set({ isAuth: false, userLogged: null, errors: e })
    return {
      hasLogged: false
    }
  }
}

export { signUp, logIn }