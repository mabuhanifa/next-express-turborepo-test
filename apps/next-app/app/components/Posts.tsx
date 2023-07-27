"use client";

import { useEffect } from "react";

export default function Posts() {
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://localhost:5000/api/post");
      const data = await res.json();
      console.log(data);
    };
    fetchPosts();
  }, []);
  return <div>Posts</div>;
}
