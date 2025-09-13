import React, { useEffect, useState } from "react";
import postService from "../appwrite/post";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

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

  return (
    <>
      {/* Hero always visible */}
      <HeroSection />
      <AboutSection/>
    </>
  );
}

export default Home;
