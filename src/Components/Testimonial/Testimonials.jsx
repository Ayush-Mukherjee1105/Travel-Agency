import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, FormGroup, Input } from 'reactstrap';
import './testimonials.css';
import avatar01 from '../../assets/images/ava-1.jpg';
import avatar02 from '../../assets/images/ava-2.jpg';
import avatar03 from '../../assets/images/ava-3.jpg';

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    comment: "This was an amazing experience! The tour guides were knowledgeable and friendly. Would definitely recommend!",
    image: avatar01,
    rating: 5,
    location: "California, USA"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    comment: "Absolutely loved every moment of the trip. The accommodations were perfect and the itinerary was well planned.",
    image: avatar02,
    rating: 5,
    location: "London, UK"
  },
  {
    id: 3,
    name: "Michael Chen",
    comment: "Great value for money. The team went above and beyond to make our trip memorable.",
    image: avatar03,
    rating: 4,
    location: "Sydney, Australia"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    comment: '',
    rating: 5,
    location: ''
  });

  const toggleModal = () => setModal(!modal);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log('New Testimonial:', newTestimonial);
    toggleModal();
  };

  return (
    <section className="testimonial__section">
      <Container>
        <Row>
          <Col lg="12">
            <div className="testimonial__wrapper">
              <div className="testimonial__content">
                <img 
                  src={testimonialData[currentIndex].image} 
                  alt="avatar" 
                  className="testimonial__avatar"
                />
                <div className="testimonial__text">
                  <h4>{testimonialData[currentIndex].name}</h4>
                  <p className="location">{testimonialData[currentIndex].location}</p>
                  <p className="comment">"{testimonialData[currentIndex].comment}"</p>
                  <div className="rating">
                    {[...Array(testimonialData[currentIndex].rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill"></i>
                    ))}
                  </div>
                </div>
              </div>

              <div className="testimonial__controls">
                <button onClick={handlePrev} className="control__btn">
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button onClick={handleNext} className="control__btn">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>

              <Button 
                color="primary" 
                className="add__testimonial-btn"
                onClick={toggleModal}
              >
                Add Your Testimonial
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Add Testimonial Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <div className="modal__header">
          <h5>Share Your Experience</h5>
          <button type="button" className="close" onClick={toggleModal}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal__body">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                placeholder="Your Name"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                placeholder="Your Location"
                value={newTestimonial.location}
                onChange={(e) => setNewTestimonial({...newTestimonial, location: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                placeholder="Share your experience..."
                value={newTestimonial.comment}
                onChange={(e) => setNewTestimonial({...newTestimonial, comment: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="select"
                value={newTestimonial.rating}
                onChange={(e) => setNewTestimonial({...newTestimonial, rating: parseInt(e.target.value)})}
              >
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </Input>
            </FormGroup>
            <Button color="primary" type="submit">Submit</Button>
          </Form>
        </div>
      </Modal>
    </section>
  );
};

export default Testimonials; 