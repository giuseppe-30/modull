import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentsArea from "../CommentsArea/CommentsArea";
import { useNavigate } from "react-router-dom";

const CardBook = ({ price, img, category, title, asin }) => {
  const [isSelet, setIsSelet] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);

  const toggeleSelet = () => {
    setIsSelet(!isSelet);
    console.log(isSelet);
  };

  const toggeleModal = () => {
    setIsModalOn(true);
  };

  const navigate = useNavigate();
  const redirectDetails = () => {
    navigate(`/BookDetalis/${asin}`);
  };

  return (
    <>
      <Col sm={12} md={4} lg={3}>
        <Card
          className={`h-100${isSelet ? "border-5 border-danger" : ""}`}
          onClick={toggeleSelet}
        >
          <CardImg
            variant="top"
            src={img}
            className="h-100 w-100 object-fit-cover"
          />
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <CardText className="text-truncate">{title}</CardText>
            <CardText>{price}</CardText>
            <Button onClick={toggeleModal} variant="warning">
              COMMENTI
            </Button>

            <Button onClick={redirectDetails}>infoBook</Button>
          </CardBody>
        </Card>
      </Col>

      {isModalOn && (
        <CommentsArea
          isModalOn={true}
          setIsModalOn={setIsModalOn}
          asin={asin}
        />
      )}
    </>
  );
};

export default CardBook;
