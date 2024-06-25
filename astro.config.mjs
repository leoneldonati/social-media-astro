import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import auth from "auth-astro";
import vercel from "@astrojs/vercel/serverless";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), auth(), db()],
  adapter: vercel()
});