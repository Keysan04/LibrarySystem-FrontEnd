import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getABookAction } from "./bookAction";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { postBurrowAction } from "../burrow-history/burrowAction";
const BookLanding = () => {
  const [showReview, setShowReview] = useState(false);

  const dispatch = useDispatch();
  const { _id } = useParams();
  const { selectedBook } = useSelector((state) => state.bookInfo);

  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    _id && dispatch(getABookAction(_id));
  }, [_id, dispatch]);

  const handleOnBurrow = () => {
    if (window.confirm("Are you sure")) {
      const obj = {
        bookId: _id,
        bookName: name,
        thumbnail,
        userId: user._id,
        userName: user.fName,
      };
      dispatch(postBurrowAction(obj));
    }
  };

  const { thumbnail, name, author, publishYear, description } = selectedBook;
  return (
    <MainLayout>
      <Container>
        <Row className="mt-4">
          <Col md={5}>
            <div>
              <img
                src={thumbnail}
                width="100%"
                className="shadow-lg img-thumbnail"
              />
            </div>
          </Col>

          <Col md={7}>
            <h1>{name}</h1>
            <p>
              {author}- {publishYear}
            </p>
            <p className="mb-5">
              <span>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStarHalf className="text-warning" />
              </span>
              <small>5 days ago</small>
            </p>
            <p>{description?.slice(0, 120)}</p>
            <p className="d-grid pt-5">
              {user?._id ? (
                <Button onClick={() => handleOnBurrow}>Burrow Book</Button>
              ) : (
                <Link to="/login" className="d-grid">
                  <Button>Login to Book</Button>
                </Link>
              )}
            </p>
          </Col>
        </Row>
        <Row className="mt-5 shadow">
          <Col className="border p-2 rounded">
            <div className="mb-5">
              <ButtonGroup aria-label="Basic example">
                <Button variant="danger" onClick={() => setShowReview(false)}>
                  Description
                </Button>
                <Button variant="warning" onClick={() => setShowReview(true)}>
                  Reviews
                </Button>
              </ButtonGroup>
            </div>
            {showReview ? (
              <>
                {" "}
                <div className="d-flex gap-3 shadow mb-4">
                  <div className="avatar">KT</div>
                  <div className="review">
                    <h4>Best Book</h4>
                    <p className="mb-3">
                      <span>
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStarHalf className="text-warning" />
                      </span>
                      <small>5 days ago</small>
                    </p>

                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam ex cupiditate asperiores officiis sed ut, dolore hic
                      omnis possimus tenetur quisquam voluptates assumenda,
                      quae, placeat quos laboriosam delectus corporis culpa.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 shadow mb-4">
                  <div className="avatar">KT</div>
                  <div className="review">
                    <h4>Best Book</h4>
                    <p className="mb-3">
                      <span>
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStarHalf className="text-warning" />
                      </span>
                      <small>5 days ago</small>
                    </p>

                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam ex cupiditate asperiores officiis sed ut, dolore hic
                      omnis possimus tenetur quisquam voluptates assumenda,
                      quae, placeat quos laboriosam delectus corporis culpa.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 shadow mb-4">
                  <div className="avatar">KT</div>
                  <div className="review">
                    <h4>Best Book</h4>
                    <p className="mb-3">
                      <span>
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStarHalf className="text-warning" />
                      </span>
                      <small>5 days ago</small>
                    </p>

                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam ex cupiditate asperiores officiis sed ut, dolore hic
                      omnis possimus tenetur quisquam voluptates assumenda,
                      quae, placeat quos laboriosam delectus corporis culpa.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              description
            )}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default BookLanding;
