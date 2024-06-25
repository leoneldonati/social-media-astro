import { column, defineTable } from 'astro:db'

// POSTS
const Posts = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    userId: column.text(),
    content: column.text(),
    createdAt: column.date({ default: new Date(Date.now()) }),
    updatedAt: column.date({ default: new Date(Date.now()) })
  }
})

// FOLLOWERS
const Followers = defineTable({
  columns: {
    followerId: column.text(),
    followedId: column.text()
  }
})

// USUARIOS
const Users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    username: column.text(),
    hash: column.text(),
    bio: column.text(),
    DATE: column.date(),
    isVerified: column.boolean(),
    createdAt: column.date({ default: new Date(Date.now()) }),
    updatedAt: column.date({ default: new Date(Date.now()) }),
    settings: column.json(),
    location: column.json(),
    avatar: column.json(),
  }
})


export { Users, Posts, Followers }