import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #000000;
  height: 80px;
  display: flex;
  postion: absolute;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  font-size: 30px;
  color: #f0fff8; /* almost white */
  text-shadow: 0 0 3px #80ffc0, 0 0 10px #00ff66, 0 0 20px #00ff66,
    0 0 30px #00ff66;
  display: flex;
  right: 0;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    color: #fff;
  }

`;
