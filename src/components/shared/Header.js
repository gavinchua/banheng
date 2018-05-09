import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import TiPhone from "react-icons/lib/ti/phone";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={RRNavLink} to="/">
            BanHeng
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink tag={RRNavLink} to="/Form">
                <TiPhone />
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/" onClick={this.toggle}>
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Restaurants
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag={RRNavLink}
                    to="/HarbourFront"
                    onClick={this.toggle}
                  >
                    @HarbourFront
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to="/TheCathay"
                    onClick={this.toggle}
                  >
                    @TheCathay
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to="/ArandaCountryClub"
                    onClick={this.toggle}
                  >
                    @ArandaCountryClub
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to="/OrchardCentral"
                    onClick={this.toggle}
                  >
                    @OrchardCentral
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to="/BoonKeng"
                    onClick={this.toggle}
                  >
                    @BoonKeng
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
