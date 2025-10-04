import React from "react";
import storageService from "../appwrite/storage";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage, userName, $createdAt }) => {
  let imageUrl = storageService.getFileView(featuredImage);
  const shortTitle = title.length > 50 ? title.substring(0, 50).trim() + "..." : title;

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-[var(--color-secondary-900)] border border-[var(--color-secondary-950)] rounded-xl p-4 transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <div className="w-full h-58 justify-center mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
         <h4 className="text-lg font-semibold font-secondary">{shortTitle}</h4>
        <div className="flex items-center gap-3 mt-3 font-secondary text-sm">
          <div className="flex items-center gap-2">
            <img
              src="/images/user.png"
              className="w-7 h-7 rounded-full object-cover"
            />
            <span >{userName}</span>
          </div>
          <p>{new Date($createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
