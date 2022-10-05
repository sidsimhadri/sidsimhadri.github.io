import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import TypeWriterEffect from "react-typewriter-effect";
import { useLocation } from "react-router";

const Navbar = () => {
  let location = useLocation();
  return (
    <>
      <Nav>
        <NavLink to={location.pathname}>
          <h1 style={{ width: "200px" }}>
            <TypeWriterEffect
              text={location.pathname}
              typeSpeed={100}
              cursorColor="#80ffc0"
              textStyle={{ fontSize: "40px" }}
            />
          </h1>
        </NavLink>
        <NavLink to="/about">./me</NavLink>
        <NavLink to="/experience">./experience</NavLink>
        <NavLink to="/projects">./projects</NavLink>
        <NavLink to="/courseWork">./courseWork+Skills</NavLink>
        <NavLink to="/contact">./contact</NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
