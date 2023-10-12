import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import header from "./Header.css";
import Link from "../Link/Link";
//class component it befor version 16.8 used because of lifecucle and state
export default class Header extends Component {
  //order of life cycle
  //1-constructore 2-render 3-componentDidMount 4-componentDidupdate 5-componentWillUnmount
  //order 1
  constructor() {
    //must put it to can use this in other conponent
    super();
    console.log("from constructor"); //1

    this.state = {
      name: "mostafa",
      job: "developer",
    };
    this.age = 20;
  }
  //order3
  //call api in this
  componentDidMount() {
    console.log("from componentDidMount");
  }
  //4
  componentDidUpdate() {
    console.log("from componentDidUpdate");
  }
  //5
  //when componen will be hidden
  componentWillUnmount() {}
  changeName = (name) => {
    this.setState({ name: name });
  };
  handleInputChange(event) {
    this.setState({ name: event.target.value });
  }
  //built in method in class component
  //should class name first letter is capital
  //order 2
  render() {
    console.log("from render"); //2
    return (
      <>
      <Link url="www.google.com" name="testlinkpropps"></Link>
        {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
              <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className="redcolor" href="#action1">
                      Home
                    </Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      {/* //className used to put class for thiss tage */}
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
}
