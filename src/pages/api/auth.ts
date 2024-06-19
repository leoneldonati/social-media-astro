import type { APIRoute } from "astro";
import ms from 'ms'

const serverHost = import.meta.env.PUBLIC_SERVER_HOST ?? 'http://localhost:8080'
const apiVersion = 1
const FETCH_OPTIONS = {
  credentials: 'include' as 'include'
}
const COOKIE_CONFIG = {
  maxAge: ms("30m"),
  httpOnly: false,
  secure: false,
}
async function post(endpoint: string, payload: FormData) {
  
  try {
    const response = await fetch(`${serverHost}/v${apiVersion}/${endpoint}`, {
      ...FETCH_OPTIONS,
      body: payload,
      method: 'POST',
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
export const POST: APIRoute = async ({ request, cookies }) => {
  const form = await request.formData()

  const response = await fetch(`${serverHost}/v${apiVersion}/auth?type=login`, {
    ...FETCH_OPTIONS,
    body: form,
    method: 'POST',
  })


  cookies.set('session', session!)
  return new Response()
}