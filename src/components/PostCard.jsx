import React from 'react'
import storageService from '../appwrite/storage';
import { Link } from 'react-router-dom';

const PostCard = ({$id, title, featuredImage}) => {
 let imageUrl = storageService.getFileView(featuredImage);

  return (
     <Link to={`/post/${$id}`}>
        <div className='w-full bg-[var(--color-secondary-900)] border border-[var(--color-secondary-950)] rounded-xl p-4 transition-transform hover:-translate-y-1 hover:shadow-2xl'>
            <div className='w-full h-58 justify-center mb-4'>
                <img src={imageUrl} alt={title}
                className='w-full h-full rounded-xl object-cover' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard