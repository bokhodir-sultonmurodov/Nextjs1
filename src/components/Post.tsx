"use client";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface IPost {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: string[];
}

const Post = ({ posts }: { posts: { posts: IPost[] } }) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/post/${id}`);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.posts.map((post) => (
        <div
          key={post.id}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            {post.title}
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.body}
          </p>

          <div className="flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{post.reactions.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsDown className="w-4 h-4" />
              <span>{post.reactions.dislikes}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => handleClick(post.id)}
            className="mt-3 px-3 py-1 text-xs cursor-pointer text-gray-700 bg-gray-300 rounded-full hover:bg-gray-400 transition-all shadow-sm"
          >
            Learn more
          </button>
        </div>
      ))}
    </div>
  );
};

export default Post;
