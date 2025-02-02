import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./Blogcard.css";

const BlogCard = ({ blog }) => {
  const { id, title, author, date, photo, content } = blog;

  return (
    <div className="blog__card">
      <Card>
        <Link to={`/blogs/${id}`}>
          <div className="blog__img">
            <img src={photo} alt={title} />
          </div>
        </Link>
        <CardBody>
          <h5 className="blog__title">
            <Link to={`/blogs/${id}`}>{title}</Link>
          </h5>
          <div className="blog__info d-flex align-items-center justify-content-between">
            <div className="blog__author">
              <p>By {author}</p>
            </div>
            <div className="blog__date">
              <span>{date}</span>
            </div>
          </div>
          <p className="blog__desc">
            {content.substring(0, 100)}...
          </p>
          <button className="btn booking__btn">
            <Link to={`/blogs/${id}`}>Read More</Link>
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCard;
