import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const Nav = styled.nav`
  background: #1976d2;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 12;
  border-radius: 3px;
`;

const NavLink = styled(Link)`
font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
  color: white;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 5px 20px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  
    border-radius: 2px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 20px;

  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items:none;
    position: absolute;
    top: 70px;
    z-index:20;
    left: 8px;
    width: 30%;
    background-color:black;
    padding: 1rem 0;
  }
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const NotificationProfileContainer = styled.div`
  display: flex;
  align-items: center;
 
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }

  return (
    <Nav>
      <Bars onClick={toggleMenu} />

      <NavMenu isOpen={isOpen}>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/Moduledit">
          Modules
        </NavLink>
        <NavLink to="/Eval" activeClassName="active">
          Evaluation
        </NavLink>
        <NavLink to="/chat" activeClassName="active">
          Chat
        </NavLink>
        </NavMenu>
        <NotificationProfileContainer>
          <NavLink to="/Notif" activeClassName="active">
          <IconButton aria-label={notificationsLabel(100)}>
      <Badge badgeContent={12} color="secondary">
        <MailIcon style={{fontSize:'25px'}}  />
      </Badge>
    </IconButton>
             </NavLink>
          <NavLink to="/profile" activeClassName="active">
            <Icon style={{fontSize:'20px'}}><FaUser /></Icon>
          </NavLink>
        </NotificationProfileContainer>
     
    </Nav>
  );
};

export default Navbar;