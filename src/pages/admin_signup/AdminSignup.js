import React from "react";
import { Form } from "react-bootstrap";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Button } from "react-bootstrap";

const AdminSignup = () => {
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "kisan",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "..",
      required: true,
    },
    {
      label: "Phone",
      name: "pone",
      type: "number",
      placeholder: "0452..",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "..",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmpassword",
      type: "password",
      placeholder: "..",
      required: true,
    },
  ];
  return (
    <div className="bg-dark p-3 text-light">
      <Form className="form-center border shadow-lg p-4 rounded mt-5">
        <h2>Create New Admin</h2>
        <CustomInput />
        <div className="d-grid mt-2">
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}
          <Button variant="primary">Create New Admin</Button>
        </div>
      </Form>
    </div>
  );
};

export default AdminSignup;
