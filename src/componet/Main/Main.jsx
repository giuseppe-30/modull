import { Container, Row } from "react-bootstrap";
import fantasy from "../../ass/fantasy.json";
import CardBook from "../CardBook/CardBook";
import SearchBook from "../SearchBook/SearchBook";
import { useState } from "react";

export const sliceBook = fantasy.slice(0, 60);
const Main = () => {
  const [books, setBooks] = useState(sliceBook);
  const [Allbook] = useState(sliceBook);

  return (
    <Container>
      <Row>
        <SearchBook books={books} setBooks={setBooks} Allbook={Allbook} />
        {books &&
          books.map((book) => (
            <CardBook
              asin={book.asin}
              key={book.asin}
              title={book.title}
              category={book.category}
              price={book.price}
              img={book.img}
            />
          ))}
      </Row>
    </Container>
  );
};

export default Main;
