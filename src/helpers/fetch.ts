const serverHost = import.meta.env.PUBLIC_SERVER_HOST ?? 'http://localhost:8080'
const apiVersion = 1
const FETCH_OPTIONS = {
  credentials: 'include' as 'include'
}


async function get(endpoint: string, config?: { headers: Headers }) {
  try {
    const response = await fetch(`${serverHost}/v${apiVersion}/${endpoint}`, {
      ...FETCH_OPTIONS,
      method: 'GET',
      headers: config?.headers
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

async function post(endpoint: string, payload: FormData, config?: { headers: Headers }) {
  
  try {
    const response = await fetch(`${serverHost}/v${apiVersion}/${endpoint}`, {
      ...FETCH_OPTIONS,
      body: payload,
      method: 'POST',
      headers: config?.headers
    })  

    
    return {
      ok: response.ok,
      data: response.ok ? (await response.json()) : null,
      error: response.ok ? null : (await response.json()),
      headers: response.headers
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