import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Users from "../Users/Users";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <p>
        <a href="/users">Users</a>
      </p>
      {/* <Users /> */}
      <img
        src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
        alt="post"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Main;
