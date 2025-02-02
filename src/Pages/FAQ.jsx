import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const FAQ = () => {
  return (
    <section className="section">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          </Col>
          <Col lg="8" className="m-auto">
            <div className="p-4 bg-light rounded">
              <div className="mb-4 p-4 bg-white rounded">
                <h5 className="mb-3">How do I book a tour?</h5>
                <p className="m-0">
                  You can book a tour through our website by selecting your desired tour package and following the booking process. Alternatively, you can contact our customer service team for assistance.
                </p>
              </div>

              <div className="mb-4 p-4 bg-white rounded">
                <h5 className="mb-3">What payment methods do you accept?</h5>
                <p className="m-0">
                  We accept various payment methods including credit/debit cards, PayPal, and bank transfers. All payments are processed securely through our platform.
                </p>
              </div>

              <div className="mb-4 p-4 bg-white rounded">
                <h5 className="mb-3">Can I cancel or modify my booking?</h5>
                <p className="m-0">
                  Yes, you can cancel or modify your booking according to our cancellation policy. Please note that certain conditions and fees may apply depending on how close to the departure date you make changes.
                </p>
              </div>

              <div className="mb-4 p-4 bg-white rounded">
                <h5 className="mb-3">What should I pack for my tour?</h5>
                <p className="m-0">
                  Packing requirements vary depending on your destination and tour type. Once you book, you'll receive a detailed packing list specific to your tour.
                </p>
              </div>

              <div className="p-4 bg-white rounded">
                <h5 className="mb-3">Are meals included in the tour price?</h5>
                <p className="m-0">
                  Meal inclusions vary by tour package. Please check the specific tour details for information about included meals and dining arrangements.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ; 