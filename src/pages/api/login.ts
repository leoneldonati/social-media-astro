import type { APIRoute } from "astro";
import { Followers, Posts, Users, db, eq } from "astro:db";
import { compare } from "../../libs/bcrypt";
import { signToken } from "../../libs/jwt";

const headers = new Headers();
headers.append("Content-Type", `application/json`);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    if (!formData.get("email") || !formData.get("password"))
      return new Response(JSON.stringify({ message: 'You must provide email and password.' }), {
        status: 400,
        headers
      });

    const { email, password } = {
      email: formData.get("email")!.toString(),
      password: formData.get("password")!.toString(),
    };
    const result = await db.select().from(Users).where(eq(Users.email, email));

    if (result.length === 0) {
      return new Response(JSON.stringify({ message: 'Wrong credentials or user not registered'}), { status: 401,  headers });
    }

    const user = result[0];

    const { ok, error } = await compare(user.hash, password);

    if (!ok)
      return new Response(JSON.stringify({ message: 'Wrong credentials or user not registered'}), {
        status: 401,
        headers
      });

    const resultPosts = await db
      .select()
      .from(Posts)
      .where(eq(Posts.userId, user.id));
    const resultFollowers = await db
      .select()
      .from(Followers)
      .where(eq(Followers.followedId, user.id));
    const resultFolloweds = await db
      .select()
      .from(Followers)
      .where(eq(Followers.followerId, user.id));
    const userParsed = {
      ...user,
      posts: resultPosts,
      followers: resultFollowers,
      followed: resultFolloweds
    };
    const token = signToken(userParsed);

    headers.append("Cookie", `session=${token}`);

    return new Response(JSON.stringify(userParsed), {
      status: 200,
      headers,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Internal server error.' }), { status: 500, headers });
  }
};
