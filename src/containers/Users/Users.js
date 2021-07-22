import React, { useState, useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

import NavigationBar from "../../components/NavigationBar/NavigationBar";

import { Card, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap";

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const respUsers = await axios(`https://gorest.co.in/public/v1/users`);
        setUsers(respUsers.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
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
                <Button
                  color="danger"
                  onClick={() => history.push(`/user/${user.name}/${user.id}`)}
                >
                  Get Details
                </Button>
                &nbsp;&nbsp;
                <Button
                  color="danger"
                  href={`mailto:${user.email}`}
                  target="_blank"
                >
                  <i className="fa fa-envelope fa-lg" aria-hidden="true" />
                </Button>
              </CardBody>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
