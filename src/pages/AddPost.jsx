import React from "react";
import PostForm from "../components/Post-Form/PostForm";

function AddPost() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto max-w-[1276px] px-4 md:px-6 py-12 md:py-16 lg:py-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 items-center">
          Add New Post
        </h1>
        <PostForm />
      </div>
    </div>
  );
}

export default AddPost;
