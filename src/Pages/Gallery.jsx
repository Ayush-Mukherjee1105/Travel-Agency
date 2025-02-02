import React from 'react'
import {Container,Row, Col} from 'reactstrap'
import galleryImg01 from '../assets/images/gallery-01.jpg'
import galleryImg02 from '../assets/images/gallery-02.jpg'
import galleryImg03 from '../assets/images/gallery-03.jpg'
import galleryImg04 from '../assets/images/hero-img01.jpg'
import galleryImg05 from '../assets/images/hero-img02.jpg'
import galleryImg06 from '../assets/images/tour-img01.jpg'
import galleryImg07 from '../assets/images/tour-img02.jpg'
import galleryImg08 from '../assets/images/tour-img03.jpg'

const galleryImages = [
  galleryImg01,
  galleryImg02,
  galleryImg03,
  galleryImg04,
  galleryImg05,
  galleryImg06,
  galleryImg07,
  galleryImg08,
]

const Gallery = () => {
  return (
    <section className="gallery__section">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="gallery__title text-center mb-5">Travel Gallery</h2>
          </Col>
          {galleryImages.map((img, index) => (
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
  )
}

export default Gallery