import React from "react";
import "../styles/About.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../assets/images/gallery-03.jpg";
import Subtitle from "../Shared/Subtitle";
import Newsletter from "../Shared/Newsletter";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="about__img">
                <img src={aboutImg} alt="about" />
              </div>
            </Col>
            <Col lg="6">
              <div className="about__content">
                <Subtitle subtitle={"About Us"} />
                <h2>
                  Welcome to WanderLuxe <br />
                  Travel and Adventure
                </h2>
                <p>
                  At WanderLuxe, we believe in creating unforgettable travel
                  experiences that combine luxury with adventure. Our carefully
                  curated destinations and personalized service ensure that every
                  journey with us is unique and memorable.
                </p>
                <div className="about__info-wrapper d-flex align-items-center gap-5">
                  <div className="about__info-item">
                    <h5>5k+</h5>
                    <p>Happy Customers</p>
                  </div>
                  <div className="about__info-item">
                    <h5>100+</h5>
                    <p>Destinations</p>
                  </div>
                  <div className="about__info-item">
                    <h5>10+</h5>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default About;
