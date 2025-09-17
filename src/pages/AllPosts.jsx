import React, { useState, useEffect } from "react";
import postService from "../appwrite/post";
import PostCard from "../components/PostCard";
import CardSkeleton from "../components/CardSkeleton";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postService.getPosts([]).then((res) => {
      if (res?.rows?.length > 0) {
        setPosts(res.rows);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full h-full">
      <div className="container mx-auto max-w-[1276px]">
        <div className="px-4 md:px-6 py-12 md:py-16 lg:py-24">
          {loading ? (
            <CardSkeleton />
          ) : posts.length === 0 ? (
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center bg-[var(--color-secondary-900)] border border-[var(--color-secondary-950)] rounded-lg shadow-lg p-6 item-center h-50 w-60">
                <p className="font-secondary">No posts available</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {posts.map((post) => (
                <PostCard key={post.$id} {...post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;
