interface UserLogged {
  id: string;
  name: string;
  email: string;
  username: string;
  hash: string;
  bio: string;
  DATE: Date;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  settings: string;
  location: null;
  avatar: string;
}

interface Post {
  post_id: string;
  post_content: string;
  post_created_at: string;
  post_updated_at: string;
  owner: any;
  like_user_ids: [];
  comments: [];
  files: string;
}

interface PostProfile {
  id: string;
  content: string;
  userid: string;
  createdAt: string;
  updatedAt: string
}
interface UserSelected extends UserLogged {
  posts: PostProfile[];
}