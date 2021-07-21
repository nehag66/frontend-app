import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Button } from "reactstrap";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <div>
        <Button color="danger" href="/users/">
          Users
        </Button>
      </div>
    </div>
  );
};

export default Main;
