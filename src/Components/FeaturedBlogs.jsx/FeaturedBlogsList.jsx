import React from "react";
import { Col, NavLink } from "reactstrap";
import BlogCard from "../../Shared/BlogCard";
import blogs from "../../assets/data/blogs";

const FeaturedBlogsList = () => {
  // Filter featured blogs from local data
  const featuredBlogs = blogs.filter(blog => blog.featured);

  return (
    <>
      {featuredBlogs.map(blog => (
        <Col lg="4" md="6" sm="6" className="mb-4" key={blog.id}>
          <BlogCard blog={blog} />
        </Col>
      ))}
      <div className="text-center mt-4">
        <NavLink to="/blogs">
          <button className="btn primary__btn">View All Blogs</button>
        </NavLink>
      </div>
    </>
  );
};

export default FeaturedBlogsList;
