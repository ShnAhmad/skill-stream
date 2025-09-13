import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import storageService from "../appwrite/storage";
import postService from "../appwrite/post";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const isAuthor = post && user ? post.userId === user.$id : false;

  useEffect(() => {
    if (slug) {
      postService.getPost(slug).then((post) => {
        console.log("post",post)
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    postService.deletePost(post.$id).then((status) => {
      if (status) {
        postService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="w-full h-full">
      <div className="container mx-auto max-w-[1276px] px-4 md:px-6 py-12 md:py-16 lg:py-24">
        <div className="flex flex-col w-full gap-5">
          <h1 className="text-2xl font-secondary font-bold">{post.title}</h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/user.png"
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="font-secondary text-base">{post.userName}</span>
            </div>
            <p>{new Date(post.$createdAt).toLocaleString()}</p>
          </div>
          <div className="h-96 w-full">
            <img
              src={storageService.getFileView(post.featuredImage)}
              alt={post.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="mr-3">Edit</Button>
              </Link>
              <Button onClick={deletePost}>Delete</Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6"></div>
        <div className="browser-css">{parse(post.content)}</div>
      </div>
    </div>
  ) : null;
}
