import React, { useState, useRef, useContext } from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tours from "../assets/data/tours"; // Import local tours data
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../Components/Booking/Booking";
import Newsletter from "../Shared/Newsletter";
import "../styles/Tourdetails.css";
import { AuthContext } from "../context/AuthContext";
import FAQ from "../Shared/FAQ";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // Find tour from local data
  const tour = tours.find(tour => tour.id === id);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Handle review submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (!user || !user.token) {
      alert('Please sign in to submit a review');
      return;
    }
    // For now, just show an alert since we're using local data
    alert('Review functionality is not available in demo mode');
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt={title} />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? "Not rated" : <span>({reviews?.length})</span>}
                    </span>

                    <span>
                      <i className="ri-map-pin-fill"></i> {city}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i> {distance} km
                    </span>
                    <span>
                      <i className="ri-group-line"></i> {maxGroupSize} people
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i> ${price} /per person
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* Reviews Section */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      {[1, 2, 3, 4, 5].map(number => (
                        <span 
                          key={number} 
                          onClick={() => setTourRating(number)}
                          className={`${tourRating >= number ? 'active' : ''}`}
                        >
                          {number} <i className="ri-star-s-fill"></i>
                        </span>
                      ))}
                    </div>
                    <div className="review__input">
                      <input 
                        type="text" 
                        ref={reviewMsgRef} 
                        placeholder="Share your thoughts" 
                        required 
                      />
                      <button className="btn primary__btn text-white" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map((review, index) => (
                      <div className="review__item" key={index}>
                        <img src={avatar} alt="avatar" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.name}</h5>
                              <p>{new Date().toLocaleDateString()}</p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}<i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <FAQ />
      <Newsletter />
    </>
  );
};

export default TourDetails;
