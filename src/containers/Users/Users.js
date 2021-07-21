import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useHistory, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import NavigationBar from "../../components/NavigationBar/NavigationBar";

import { Card, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  const history = useHistory();
  //   let { path } = useRouteMatch();

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
              {/* <CardBody onClick={() => history.push(`${path}/${user.id}`)}> */}
              <CardBody onClick={() => history.push(`/user/${user.id}`)}>
                <CardTitle>Name: {user.name}</CardTitle>
                <CardSubtitle>Email: {user.email}</CardSubtitle>{" "}
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
