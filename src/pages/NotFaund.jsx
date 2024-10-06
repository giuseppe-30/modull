import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFaund = () => {
  return (
    <>
      <Container>
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center text-white"
            lg={12}
          >
            <h1>pagina non trovata</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NotFaund;
