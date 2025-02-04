import React from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Testimonials from "../Components/Testimonial/Testimonials";
import ServiceList from '../Components/Services/ServiceList';

// Import gallery images
import galleryImg01 from '../assets/images/gallery-01.jpg';
import galleryImg02 from '../assets/images/gallery-02.jpg';
import galleryImg03 from '../assets/images/gallery-03.jpg';
import galleryImg04 from '../assets/images/hero-img01.jpg';
import galleryImg05 from '../assets/images/hero-img02.jpg';
import galleryImg06 from '../assets/images/tour-img01.jpg';
import galleryImg07 from '../assets/images/tour-img02.jpg';
import galleryImg08 from '../assets/images/tour-img03.jpg';

const galleryImages = [
  galleryImg01,
  galleryImg02,
  galleryImg03,
  galleryImg04,
  galleryImg05,
  galleryImg06,
  galleryImg07,
  galleryImg08,
];

const Home = () => {
  return (
    <>
      {/* hero section start */}
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <h3>Know Before You Go</h3>
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* services section */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* featured tour section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h3 className="featured__tour-title">Our featured tours</h3>
            </Col>
          </Row>
        </Container>
      </section>

      {/* experience section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Quas aliquam, hic tempora inventore suscipit unde.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* gallery section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="gallery__title text-center mb-5">
                Visit our customers tour gallery
              </h2>
            </Col>
            {galleryImages.slice(0, 4).map((img, index) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={index}>
                <div className="gallery__item">
                  <img src={img} alt="" className="w-100 rounded shadow-sm" />
                  <div className="gallery__overlay">
                    <h5 className="mb-0">Beautiful Destination</h5>
                    <p>Location, Country</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* testimonial section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="testimonial__title text-center mb-5">
                What our fans say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;