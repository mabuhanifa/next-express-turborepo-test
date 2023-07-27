type Post = {
  id: string;
  title: string;
  body: string;
  author?: User;
  authorId: string;
};

type User = {
  id: string;
  name?: string;
  email: string;
  password: string;
  posts?: Post[];
};
