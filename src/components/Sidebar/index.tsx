import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'react-inlinesvg';

import logoSVG from '../../../public/images/logo.svg';

import homeSVG from '../../../public/images/home.svg';
import documentSVG from '../../../public/images/documents.svg';
import librarySVG from '../../../public/images/library.svg';
import sharingSVG from '../../../public/images/sharing.svg';
import deletedSVG from '../../../public/images/sharing.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <InlineSVG className="sidebar-logo" src={logoSVG} />

      <nav className="sidebar-nav">
        <Nav>
          <NavItem>
            <NavLink to="/home" className="nav-link">
              <div className="nav-icon">
                <InlineSVG src={homeSVG} />
              </div>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/documents" className="nav-link">
              <div className="nav-icon">
                <InlineSVG src={documentSVG} />
              </div>
              My Documents
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/deleted" className="nav-link">
              <div className="nav-icon">
                <InlineSVG src={deletedSVG} />
              </div>
              Deleted Documents
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/library" className="nav-link">
              <div className="nav-icon">
                <InlineSVG src={librarySVG} />
              </div>
              Document Library
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/sharing" className="nav-link">
              <div className="nav-icon">
                <InlineSVG src={sharingSVG} />
              </div>
              Sharing
            </NavLink>
          </NavItem>
        </Nav>
      </nav>
    </div>
  );
};

export default Sidebar;
