import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { getAllUsers } from "../../helpers/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../user_sinup_login/userAction";
import { Col, Row } from "react-bootstrap";
import Graph from "./Graph";

const Dashboard = () => {
  const { users } = useSelector((state) => state.userInfo);
  const { books } = useSelector((state) => state.bookInfo);

  console.log(books);
  console.log(users);

  // console.log(first);

  return (
    <UserLayout title="Dashboard">
      hell <Graph />
      <Row></Row>
    </UserLayout>
  );
};

export default Dashboard;
