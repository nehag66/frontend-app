import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, CardBody, CardTitle, Label } from "reactstrap";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import axios from "axios";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState({});
  const [posts, setPosts] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      const respUsers = await axios(
        `https://gorest.co.in/public/v1/users/${id}`
      );
      const respPosts = await axios(
        `https://gorest.co.in/public/v1/posts/${id}`
      );
      setUserDetail(respUsers.data.data);
      //console.log(respUsers.data.data);
      setPosts(respPosts.data.data);
      //console.log(respPosts.data.data);
    };
    fetchUsers();
  }, [id]);

  return (
    <div>
      <NavigationBar />
      <div className="posts-list">
        <Card>
          <CardBody>
            <Label>DETAILS</Label>
            <hr />
            <CardTitle>Name: {userDetail.name}</CardTitle>
            <CardTitle>Email: {userDetail.email}</CardTitle>
            <CardTitle>Gender: {userDetail.gender}</CardTitle>
            <CardTitle>Status: {userDetail.status}</CardTitle>
          </CardBody>
        </Card>
        <br />
        <Card>
          <CardBody>
            <Label>POSTS</Label>
            <hr />
            <CardTitle>Post Title: {posts.title}</CardTitle>
            <CardTitle>Post Body: {posts.body}</CardTitle>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserDetail;
