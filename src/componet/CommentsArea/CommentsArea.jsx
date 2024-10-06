import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { apiUrl, token } from "../../constants";
import { ClipLoader } from "react-spinners";

const CommentsArea = ({ asin, isModalOn, setIsModalOn }) => {
  const [isLoading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [render, setRender] = useState(false);
  const [payLoad, setPayLoad] = useState({
    elementId: asin,
    comment: "",
    rate: "",
    id: null,
  });
  const toggerRender = () => {
    setRender(!render);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const inputValue = name === "rate" ? Number(value) : value;
    setPayLoad({
      ...payLoad,
      [name]: inputValue,
    });
    console.log(payLoad);
  };

  const closeModal = () => {
    setIsModalOn(false);
  };

  const ENDPOINT = `${apiUrl}books/${asin}/comments/`;

  const getComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(ENDPOINT, {
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      setComments(data);
      console.log(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const postComments = async () => {
    try {
      setLoading(true);
      const responsePost = await fetch(`${apiUrl}comments/`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      });
    } catch (error) {
    } finally {
      setLoading(false);
      alert("GRAZIE COMMENTO");
    }
  };

  const deliteComments = async (commentId) => {
    try {
      setLoading(true);
      return await fetch(`${apiUrl}comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toggerRender();
    }
  };

  const putCommments = async (commentId) => {
    try {
      setLoading(true);
      const responsePut = await fetch(`${apiUrl}comments/${commentId}`, {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      });
      const resultPut = await responsePut.json();
      console.log(resultPut);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toggerRender();
    }
  };

  useEffect(() => {
    getComments();
  }, [render]);
  return (
    <>
      <Modal show={isModalOn} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ClipLoader loading={isLoading} />
          {!isLoading && !isError && comments.length === 0 && (
            <p>non ci sono commenti</p>
          )}
          {!isLoading &&
            !isError &&
            comments.length > 0 &&
            comments.map((comment) => (
              <div>
                <p>autore:{comment.author}</p>
                <p>rating:{comment.rate}</p>
                <p>{comment.comment}</p>
                <button
                  onClick={() => putCommments(comment._id)}
                  className="btn btn-info m-2"
                >
                  modifica
                </button>
                <button
                  onClick={() => deliteComments(comment._id)}
                  className="btn btn-danger"
                >
                  elimina
                </button>
              </div>
            ))}
          <div className="d-flex flex-column">
            <input
              name="comment"
              placeholder="commenta"
              onChange={handleInputChange}
              type="text"
            />
            <input
              min="0"
              max="5"
              step="1"
              placeholder="rate"
              onChange={handleInputChange}
              type="number"
              name="rate"
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={postComments} variant="secondary">
            commenta
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommentsArea;
