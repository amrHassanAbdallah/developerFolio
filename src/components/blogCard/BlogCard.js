import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog}) {
  return (
    <a className="blog-card" href={blog.url} target="_blank" rel="noopener noreferrer">
      <h3 className="blog-title">{blog.title}</h3>
      <p className="subTitle blog-description">{blog.description}</p>
    </a>
  );
}
