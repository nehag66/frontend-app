import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import axios from "axios";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v1/users/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setUserDetail(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <NavigationBar />
      <div className="users-list">
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
    </div>
  );
};

export default UserDetail;
