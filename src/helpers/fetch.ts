const serverHost = import.meta.env.PUBLIC_SERVER_HOST ?? 'http://localhost:8080'
const apiVersion = 1
const FETCH_OPTIONS = {
  credentials: 'include' as 'include'
}

async function get(endpoint: string) {
  try {
    const response = await fetch(`${serverHost}/v${apiVersion}/${endpoint}`, {
      ...FETCH_OPTIONS,
      method: 'GET'
    })

    return {
      ok: response.ok,
      data: response.ok ? (await response.json()) : null,
      error: response.ok ? null : response.statusText
    }
  }
  catch (e) {
    return {
      ok: false,
      data: null,
      error: e
    }
  }
  
}

async function post(endpoint: string, payload: FormData) {
  
  try {
    const response = await fetch(`${serverHost}/v${apiVersion}/${endpoint}`, {
      ...FETCH_OPTIONS,
      body: payload,
      method: 'POST'
    })

    return {
      ok: response.ok,
      data: response.ok ? (await response.json()) : null,
      error: response.ok ? null : (await response.json())
    }
  }
  catch (e) {
    return {
      ok: false, 
      data: null,
      error: e
    }
  }
}

export { get, post }