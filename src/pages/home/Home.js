import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { CustomCarousel } from "../../components/carousel/CustomCarousel";
import { Row, Col, Container, Form, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [filteredBook, setFilteredBook] = useState([]);
  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    const activeBooks = books.filter((book) => book.status === "active");

    setFilteredBook(activeBooks);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const str = value.toLowerCase();
    const searchedBook = books.filter(
      (book) =>
        books.status === "active" && book.name.toLowerCase().includes(str)
    );
    setFilteredBook(searchedBook);
  };

  return (
    <MainLayout>
      <div>
        {/* carousel */}
        <CustomCarousel />

        {/* booklist cart */}
        <Container className="mt-5" fluid>
          <Row>
            <Col className="d-flex justify-content-between">
              <label htmlFor="">{filteredBook.length} books found</label>

              <div>
                <Form.Control
                  onChange={handleOnSearch}
                  placeholder="Search book by name.."
                />
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center flex-wrap mt-5 gap-3">
              {filteredBook.map(
                (book, i) =>
                  // <Link key = {book._id} to = {`/book`}/>
                  book.status === "active" && (
                    <Link to={`/book/${book._id}`} key={i}>
                      <CustomCard {...book} />
                    </Link>
                  )
              )}
              {filteredBook.length < 1 && (
                <Alert variant="warning">No Book Found</Alert>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Home;
