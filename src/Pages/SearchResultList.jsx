import React from "react";
import CommonSection from "../Shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../Shared/TourCard";
import { useLocation } from "react-router-dom";
import Newsletter from "../Shared/Newsletter";

const SearchResultList = () => {
  const location = useLocation();
  const searchResults = location.state?.results || [];

  return (
    <>
      <CommonSection title={"Tour Search Results"} />
      <section>
        <Container>
          <Row>
            {searchResults.length === 0 ? (
              <h4 className="text-center">No tours found</h4>
            ) : (
              searchResults.map(tour => (
                <Col lg="3" className="mb-4" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;
