"use client";

import { useEffect, useState } from "react";
type Post = {
  id: string;
  title: string;
  body: string;
  author?: User;
  authorId: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://localhost:5000/api/post");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div>
        {posts && posts.map((post) => <div key={post.id}>{post.title}</div>)}
      </div>
    </div>
  );
}
