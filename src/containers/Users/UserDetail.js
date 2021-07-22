import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, CardBody, CardTitle, Label, Button } from "reactstrap";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import axios from "axios";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState({});
  const [isPost, setIsPost] = useState("false");
  const [btnPressed, setBtnPressed] = useState("false");
  const [posts, setPosts] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const respUsers = await axios(
          `https://gorest.co.in/public/v1/users/${id}`
        );
        setUserDetail(respUsers.data.data);
        console.log(respUsers.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, [id]);

  const onClickHandler = (e) => {
    e.preventDefault();
    const fetchPosts = async () => {
      setBtnPressed(true);
      try {
        const respPosts = await axios(
          `https://gorest.co.in/public/v1/posts/${id}`
        );
        if (respPosts.status === 200) {
          setPosts(respPosts.data.data);
          setIsPost(true);
          //console.log(respPosts.data.data);
        }
      } catch (e) {
        //console.log(e);
      }
      //console.log(Object.keys(posts).length);
    };
    fetchPosts();
  };

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
          <Button onClick={onClickHandler} color="danger">
            SEE POST(if available)
          </Button>
        </Card>
        <br />
        {btnPressed === true ? (
          isPost === true ? (
            <Card>
              <CardBody>
                <Label>POSTS</Label>
                <hr />
                <CardTitle>Post Title: {posts.title}</CardTitle>
                <CardTitle>Post Body: {posts.body}</CardTitle>
              </CardBody>
            </Card>
          ) : (
            <Card>
              <CardBody>Post Not Available</CardBody>
            </Card>
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
