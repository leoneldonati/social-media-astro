import type { APIRoute } from "astro";

const headers = new Headers();
headers.append("Content-Type", `application/json`);

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();

    return new Response(JSON.stringify({ message: "Signed in.", form }), {
      status: 200,
      headers,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Internal server error." }), {
      status: 500,
      headers,
    });
  }
};
