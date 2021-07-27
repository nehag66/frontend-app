import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { useHistory } from "react-router-dom";

import "./NavigationBar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="danger" light expand="md" className="navibar">
        {/* <NavbarBrand href="/">Frontend-App</NavbarBrand> */}
        <NavbarBrand
          onClick={() => history.push(`/`)}
          className="navibar-icons"
        >
          {" "}
          Frontend-App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink href="/users/">Users</NavLink> */}
              <NavLink
                onClick={() => history.push(`/users/`)}
                className="navibar-icons"
              >
                Users{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => history.push(`/user/createPost`)}
                className="navibar-icons"
              >
                Create Post{" "}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
