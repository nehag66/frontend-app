import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Button } from "reactstrap";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <p>
        <Button href="/users/">Users</Button>
      </p>
    </div>
  );
};

export default Main;
