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

import "./NavigationBar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="danger" light expand="md" className="navibar">
        <NavbarBrand href="/">Frontend-App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/users/">Users</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
