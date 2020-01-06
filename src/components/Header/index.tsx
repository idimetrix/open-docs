import React from 'react';
import { Input, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'react-inlinesvg';

import bellSVG from '../../../public/images/bell.svg';

const Header = () => {
  return (
    <header className="app-header navbar">
      <div className="search">
        <Input type="text" bsSize="lg" placeholder="Search" />
      </div>
      <div>
        <Nav navbar={true}>
          <NavItem>
            <NavLink className="nav-link" to="#">
              <div className="icon">
                <InlineSVG src={bellSVG} />
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="#">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="#">
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="#">
              Sign In
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </header>
  );
};

export default Header;
