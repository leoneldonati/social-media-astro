import { defineDb } from 'astro:db';
import { Followers, Posts, Users } from './tables';

// https://astro.build/db/config
export default defineDb({
  tables: {
    Users,
    Posts,
    Followers
  }
});
