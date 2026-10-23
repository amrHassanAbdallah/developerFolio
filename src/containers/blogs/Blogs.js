import React, {useState, useEffect} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";

export default function Blogs() {
  const [mediumBlogs, setMediumBlogs] = useState([]);
  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }
  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }
  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (!blogSection.display) {
    return null;
  }
  return (
    <div className="container" id="blogs">
      <div className="blog-header">
        <h2 className="blog-header-text section-heading">{blogSection.title}</h2>
        <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogSection.displayMediumBlogs !== "true" ||
          mediumBlogs === "Error"
            ? blogSection.blogs.map(blog => {
                return (
                  <BlogCard
                    key={blog.url}
                    blog={{
                      url: blog.url,
                      title: blog.title,
                      description: blog.description
                    }}
                  />
                );
              })
            : mediumBlogs.map((blog, i) => {
                return (
                  <BlogCard
                    key={i}
                    blog={{
                      url: blog.link,
                      title: blog.title,
                      description: extractTextContent(blog.content)
                    }}
                  />
                );
              })}
        </div>
      </div>
      {blogSection.seeMore && (
        <div className="button-greeting-div-center">
          <a className="main-button" href={blogSection.seeMore} target="_blank" rel="noopener noreferrer">
            {blogSection.seeMoreText}
          </a>
        </div>
      )}
    </div>
  );
}
