import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const PostDetail = async ({ params }: { params: any }) => {
  const id = params.id;

  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "force-cache",
  });
  const post = await res.json();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow border mt-10">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>

      <div className="flex gap-4 text-gray-600 text-sm mb-4">
        <div className="flex items-center gap-1">
          <ThumbsUp className="w-4 h-4" />
          <span>{post.reactions.likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <ThumbsDown className="w-4 h-4" />
          <span>{post.reactions.dislikes}</span>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {post.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
