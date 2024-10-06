import { Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { sliceBook } from "../Main/Main";
import { useState } from "react";

const SearchBook = ({ Allbook, books, setBooks }) => {
  const [inputvalue, setinputvalue] = useState("");

  const onChageSetInput = (e) => {
    setinputvalue(e.target.value);
  };

  const filterBoooks = () => {
    if (inputvalue === "") {
      setBooks(Allbook);
    } else {
      const filterd = books.filter((book) => {
        return book.title.toLowerCase().includes(inputvalue.toLowerCase());
      });

      setBooks(filterd);
    }
  };

  return (
    <Row>
      <Col className="d-flex justify-content-center align-items-center gap-2">
        <Form.Control
          onChange={onChageSetInput}
          placeholder="searchBook"
          type={"text"}
        />
        <button onClick={filterBoooks} className="btn btn-info">
          {" "}
          cerca
        </button>
      </Col>
    </Row>
  );
};

export default SearchBook;
