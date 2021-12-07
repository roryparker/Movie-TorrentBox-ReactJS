import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

class Navigation extends React.Component {


  // constructor(){
  //   super();
  // }

  componentDidMount(){
    
  }

  render(){
    
          return (
            <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Movies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" onClick={()=>{this.props.changePage("",undefined,true)}}>Home</Nav.Link>
                        <Nav.Link href="#" onClick={()=>{this.props.changePage("search")}}>Search</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","james bond",true)}}>James Bond</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","star wars",true)}}>Star Wars</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={()=>{this.props.changePage("","X-Men",true)}}>X-Men</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                   
                    </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Navigation;
