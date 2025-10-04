import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postService from "../appwrite/post";
import PostForm from "../components/Post-Form/PostForm";
import PostFormSkeleton from "../components/PostFormSkeleton";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      postService.getPost(slug).then((res) => {
        if (res) {
          setPost(res);
        } else {
          navigate("/");
        }
        setLoading(false);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return (
    <div className="w-full h-full">
      <div className="container mx-auto max-w-[1276px] px-4 md:px-6 py-12 md:py-16 lg:py-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 items-center">
          Edit Post
        </h1>

        {loading ? (
          <PostFormSkeleton /> 
        ) : (
          <PostForm post={post} />
        )}
      </div>
    </div>
  );
}

export default EditPost;
