import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Card from './Card';
import HomeHeader from './HomeHeader';

function NavbarComponent() {
    const data = [
        {
          image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-dien-thoai-anime-2.jpg',
          title: 'Card Title 1',
          description: 'Card Description 1',
          linkText: 'https://www.example.com/1',
        },
        {
          image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-dien-thoai-anime-2.jpg',
          title: 'Card Title 2',
          description: 'Card Description 2',
          linkText: 'https://www.example.com/2',
        },
     ];
 return (
    <div>
      
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-dien-thoai-anime-2.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} description={item.description} linkText={item.linkText} />
        ))}
      </div>
    </div>
  </div>

 );
}

export default NavbarComponent;