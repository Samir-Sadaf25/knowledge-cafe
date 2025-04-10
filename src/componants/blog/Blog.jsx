import React from 'react';
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog,handleBookmark,handleRead}) => {
    return (
        <div className="">
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-around items-center">
                        <h3>{blog.author}</h3>
                        <img className="w-16" src={blog.author_img} alt="" />
                        <button className="btn btn-xs" onClick={() => handleBookmark(blog)}><FaBookmark size={25}/></button>
                    </div>
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="flex">
                        {
                            blog.hashtags.map((hash,idx) =>  <p key={idx}>#{hash}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleRead(blog.reading_time,blog.id)}>mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;