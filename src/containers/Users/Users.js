import React, { useState, useEffect } from "react";
import axios from "axios";

import NavigationBar from "../../components/NavigationBar/NavigationBar";

import { Card, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="users-list">
        <ul>
          {users.map((user) => (
            <Card key={user.id}>
              <CardBody>
                <CardTitle>Name: {user.name}</CardTitle>
                <CardSubtitle>Email: {user.email}</CardSubtitle>{" "}
                <Button href="mailto:{user.email}" target="_blank">
                  mail
                </Button>
                {/* onClick={() => history.push(`${path}/${announcement._id}`)} */}
              </CardBody>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
