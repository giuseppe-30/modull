import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../../componet/MyNavbar/MyNavbar";
import fantasy from "../../ass/fantasy.json";
import { Card, Col, Container, Row } from "react-bootstrap";
import { token } from "../../constants";

const BookDetalis = () => {
  const { bookId } = useParams();
  const books = [...fantasy];
  const bookAsin = books.find((book) => book.asin === bookId);

  const getBook = async () => {
    if (!bookId) return;
    try {
      response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`,
        {
          headers: { Authorization: token },
        }
      );
      books = await response.json();
    } catch (error) {}
  };

  useEffect(() => {
    getBook(), [];
  });

  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col sm={12} md={6} lg={5}>
            <Card className="book-card shadow-sm">
              <Card.Img variant="top" src={bookAsin.img} className="book-img" />
              <Card.Body>
                <Card.Title className="book-title">{bookAsin.title}</Card.Title>
                <Card.Text>
                  <strong>Category:</strong> {bookAsin.category}
                </Card.Text>
                <Card.Text>
                  <strong>Price:</strong> {bookAsin.price}£
                </Card.Text>
                <Card.Text>{bookAsin.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookDetalis;
