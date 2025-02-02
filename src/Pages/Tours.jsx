import React, { useState } from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css";
import TourCard from "./../Shared/TourCard";
import SearchBar from "../Shared/SearchBar";
import Newsletter from "../Shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import tours from "../assets/data/tours"; // Import local tours data

const Tours = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 8;

  // Get current tours
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <SearchBar />
      <section>
        <Container>
          <Row>
            {currentTours.map((tour) => (
              <Col lg="3" md="6" sm="6" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(Math.ceil(tours.length / toursPerPage))].map((_, i) => (
                  <span
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`page ${currentPage === i + 1 ? "active__page" : ""}`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
