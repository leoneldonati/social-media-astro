import { defineConfig } from "auth-astro";
import Google from "@auth/core/providers/google";
import Instagram from "@auth/core/providers/instagram";
export default defineConfig({
  providers: [
    Google({
    }),
    Instagram({})
  ]
})