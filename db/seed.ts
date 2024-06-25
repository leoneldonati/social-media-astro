import { Followers, Posts, Users, db } from "astro:db";

export default async function() {
  await db.insert(Users).values([
    {
      id: '0447a2fa-bc93-449f-8b34-d263f39c6d5d',
      avatar: JSON.stringify({}),
      bio: 'My bio',
      DATE: new Date(Date.now()),
      email: 'contacto.leoneldonati@gmail.com',
      hash: '$2b$10$eO4i7qxWZ/mdx2iILJIK0e6JLwKu5KAt8zAqSSr24nhNmjwD8DKOC',
      isVerified: false,
      location: JSON.stringify({}),
      name: 'Leonel Donati',
      settings: JSON.stringify({}),
      username: 'leodonati',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    },
    {
      id: '005f1d63-76f4-47fe-b1a0-cc23afa114e7',
      avatar: JSON.stringify({}),
      bio: 'My bio',
      DATE: new Date(Date.now()),
      email: 'email2@email.com',
      hash: 'ad1879a0vhg8go8gGg78ogfo/(OG#f8g73fO(GofgO/(GQ38710d8gg888ga7dg9asadwg8',
      isVerified: false,
      location: JSON.stringify({}),
      name: 'Jhon Oxford',
      settings: JSON.stringify({}),
      username: 'jhonoxford',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    }
  ])

  await db.insert(Posts).values([
    {
      id: crypto.randomUUID(),
      userId: '005f1d63-76f4-47fe-b1a0-cc23afa114e7',
      content: 'Contenido del post!!!!',
    },
    {
      id: crypto.randomUUID(),
      userId: '005f1d63-76f4-47fe-b1a0-cc23afa114e7',
      content: 'Contenido del post!!!!',
    },
    {
      id: crypto.randomUUID(),
      userId: '005f1d63-76f4-47fe-b1a0-cc23afa114e7',
      content: 'Contenido del post!!!!',
    },
    {
      id: crypto.randomUUID(),
      userId: '0447a2fa-bc93-449f-8b34-d263f39c6d5d',
      content: 'Contenido del post!!!!',
    },
    {
      id: crypto.randomUUID(),
      userId: '0447a2fa-bc93-449f-8b34-d263f39c6d5d',
      content: 'Contenido del post!!!!',
    },
    {
      id: crypto.randomUUID(),
      userId: '0447a2fa-bc93-449f-8b34-d263f39c6d5d',
      content: 'Contenido del post!!!!',
    }
  ])

  await db.insert(Followers).values([
    {
      followedId: '0447a2fa-bc93-449f-8b34-d263f39c6d5d',
      followerId: '005f1d63-76f4-47fe-b1a0-cc23afa114e7'
    }
  ])
}