import React from 'react';
import TourCard from '../../Shared/TourCard';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import tours from '../../assets/data/tours';

const FeaturedToursList = () => {
  // Filter featured tours from local data
  const featuredTours = tours.filter(tour => tour.featured);

  return (
    <>
      {featuredTours.map(tour => (
        <Col lg="3" md="6" sm="6" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
      <div className="text-center mt-4">
        <NavLink to="/tours">
          <button className="btn primary__btn">View All Tours</button>
        </NavLink>
      </div>
    </>
  );
};

export default FeaturedToursList;
