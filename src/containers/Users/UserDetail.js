import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import axios from "axios";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState({});
  //const [users, setUsers] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/users")
      .then((response) => {
        console.log(response);
        setUserDetail(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <NavigationBar />
      <Card>
        <CardBody>
          <CardTitle>Name: {userDetail.name}</CardTitle>
          <hr />
          <CardSubtitle>Email: {userDetail.email}</CardSubtitle>
          <CardSubtitle>Gender: {userDetail.gender}</CardSubtitle>
          <CardSubtitle>Status: {userDetail.status}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserDetail;
