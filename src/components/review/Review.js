import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const Review = ({ bookId, _id, bookName }) => {
  const [form, setForm] = useState({ rating: 5 });

  const handOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnStar = (rating) => {
    setForm({
      ...form,
      rating,
    });
  };

  const handleonSubmit = (e) => {
    e.preventDefault();
    const obj = { ...form, bookId, _id, bookName };

    //call api to create new review in the reveiew table
  };

  return (
    <div>
      <Form onSubmit={handleonSubmit}>
        <h3>You are giving reviews to {bookName}</h3>
        <hr />
        <CustomInput
          name="title"
          label="Title"
          required={true}
          placeholder="Best Book Every ..."
          onChange={handOnChange}
        />

        <Form.Group className="mb-3">
          <Form.Label>Select Rating</Form.Label>

          <div>
            {Array(5)
              .fill("")
              .map((str, i) => (
                <FaStar
                  key={i}
                  onClick={() => handleOnStar(i + 1)}
                  className={
                    form.rating > i ? "new-star text-warning" : "new-star"
                  }
                />
              ))}
          </div>
        </Form.Group>

        <CustomInput
          as="textarea"
          name="message"
          label="Detail Review"
          required={true}
          rows="5"
          placeholder="Best Book Every ..."
          onChange={handOnChange}
        />

        <div className="d-grid">
          <Button type="submit">Submit Reivew</Button>
        </div>
      </Form>
    </div>
  );
};
