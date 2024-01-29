import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";

const BurrowHistory = () => {
  const { user } = useSelector((state) => state.userInfo);
  return user?.role === "admin" ? (
    <UserLayout title={"Browser History"}>BurrowHistory</UserLayout>
  ) : (
    <h1>Unauthorize</h1>
  );
};

export default BurrowHistory;
