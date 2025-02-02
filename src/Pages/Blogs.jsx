import React from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css";
import Newsletter from "../Shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../Shared/BlogCard";
import blogs from "../assets/data/blogs"; // Import local blog data

const Blogs = () => {
  return (
    <div>
      <CommonSection title={"Travel Insights"} />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="featured__tour-title">Our Latest Travel Stories</h2>
            </Col>
            {blogs.map((blog) => (
              <Col lg="4" md="6" sm="6" className="mb-4" key={blog.id}>
                <BlogCard blog={blog} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  );
};

export default Blogs;
