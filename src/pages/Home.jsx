import React, { useEffect, useState } from "react";
import postService from "../appwrite/post";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      postService.getPosts().then((posts) => {
        if (posts?.rows) {
          setPosts(posts.rows);
        } else {
          setPosts([]);
        }

      });
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto py-8 mt-4 text-center">
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
      </div>
    );
  }
  if (isLoggedIn && posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
          <h1 className="text-2xl font-bold text-gray-700">
            No posts yet, be the first to post!
          </h1>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
    </div>
  );
}

export default Home;
