import React, { useState } from "react";

import { Form, FormGroup, Label, Input, Button, Card } from "reactstrap";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./CreatePost.css";

import axios from "axios";

const CreatePost = () => {
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const uploadFile = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      id: id,
      user_id: userId,
      title: title,
      body: body,
    });

    var config = {
      method: "post",
      url: `https://gorest.co.in/public/v1/posts/`,
      headers: {
        Authorization:
          "Bearer 89b4747c613978902761dd600e8fa3116c72cbf099a2f5b002bae1fda820463d",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <NavigationBar />
      <div>
        <Card className="create-post-list">
          <Form onSubmit={uploadFile} autoComplete="off">
            <FormGroup>
              <Label for="id">ID</Label>
              <Input
                type="text"
                name="id"
                id="id"
                placeholder="Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="userId">USER ID</Label>
              <Input
                type="text"
                name="userId"
                id="userId"
                placeholder="User Id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">TITLE</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="body">BODY</Label>
              <Input
                type="text"
                name="body"
                id="body"
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </FormGroup>
            <Button type="submit" color="primary">
              POST
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default CreatePost;
