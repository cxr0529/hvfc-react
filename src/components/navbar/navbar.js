import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";

function Navbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar fixed="top" />
        <Navbar.Brand href="#home"><img className="d-inline-block align-top" src={'../src/images/logo.jpg'} alt="Logo"/>{' '}Harrisville VFC</Navbar.Brand>
        <Navbar.Toggle aria-controls="hvfc-navbar" />
        <Navbar.Collapse id="hvfc-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="About Us" id="about-us-dropdown">
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#history">History</NavDropdown.Item>
              <NavDropdown.Item href="../src/docs/HVFC-BY-LAWS-2023.pdf" target="_blank">By-Laws</NavDropdown.Item>
              <NavDropdown.Item href="#construction">Call History</NavDropdown.Item>
              <NavDropdown.Item href="#apparatus">Apparatus</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Member Info" id="member-dropdown">
              <NavDropdown.Item href="#contact">Current Members</NavDropdown.Item>
              <NavDropdown.Item href="#history">Lifetime Members</NavDropdown.Item>
              <NavDropdown.Item href="../src/docs/HVFCMembershipApplication.pdf" target="_blank">Membership Application</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hall Rental" id="hall-rental-dropdown">
              <NavDropdown.Item href="#calendar">Availability Calendar</NavDropdown.Item>
              <NavDropdown.Item href="#rentalGallery">Photo Gallery</NavDropdown.Item>
              <NavDropdown.Item href="../src/docs/HallRentalFAQ.pdf" target="_blank">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="../src/docs/docs/HVFC-RentalAgreement.pdf" target="_blank">Hall Rental Application</NavDropdown.Item>
            <NavDropdown title="Useful Links" id="useful-links-dropdown">
              <NavDropdown.Item href="#links">Fire Departments</NavDropdown.Item>
              <NavDropdown.Item href="../src/docs/AddressSignsOrderforms.pdf" target="_blank">Address Sign Order Form</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Photo Gallery" id="photo-gallery-dropdown">
              <NavDropdown.Item href="#trucks">Trucks</NavDropdown.Item>
              <NavDropdown.Item href="#personnel">Personnel</NavDropdown.Item>
              <NavDropdown.Item href="#training" target="_blank">Training</NavDropdown.Item>
              <NavDropdown.Item href="#construction">Fires</NavDropdown.Item>
              <NavDropdown.Item href="#apparatus">Accidents</NavDropdown.Item>
              <NavDropdown.Item href="#misc">Misc.</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://www.facebook.com/hvfc1938" target="_blank"><img src={'../src/images/Facebook.png'} alt="Facebook" /></Nav.Link>
            <Nav.Link href="https://www.instagram.com/hvfc1938" target="_blank"><img src={'../src/images/Instagram.png'} alt="Instagram" /></Nav.Link>
            <Nav.Link href="https://www.ready.gov/kids/games" target="_blank">Kids Zone</Nav.Link>
            <Nav.Link href="tel: 7247354646">Give us a call</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;