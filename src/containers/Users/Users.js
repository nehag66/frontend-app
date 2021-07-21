import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  ListGroup,
  ListGroupItemText,
  ListGroupItemHeading,
  ListGroupItem,
} from "reactstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/users/123")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="users-list">
        <ul>
          {users.map((user) => (
            <ListGroup key={user.id}>
              <ListGroupItem>
                <ListGroupItemHeading>Name: {user.name}</ListGroupItemHeading>
                <ListGroupItemText>Email: {user.email}</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
