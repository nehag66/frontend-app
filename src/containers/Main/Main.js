import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useHistory } from "react-router-dom";

import { Button } from "reactstrap";

const Main = () => {
  const history = useHistory();
  return (
    <div>
      <NavigationBar />
      <br />
      <div>
        {/* <Button color="danger" href="/users/"> */}
        <Button color="danger" onClick={() => history.push(`/users/`)}>
          Users
        </Button>
        &nbsp;&nbsp;
        <Button color="danger" onClick={() => history.push(`/user/createPost`)}>
          Create Post
        </Button>
      </div>
    </div>
  );
};

export default Main;
