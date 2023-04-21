import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand> <Link style={{textDecoration: 'none' , color:'white', fontSize:'25px', fontFamily:'fantasy'}} to={'/'}>A&B</Link> </Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link>
              <Link style={{textDecoration: 'none', color:'white', fontSize:'21px', fontFamily:'fantasy'}} to={'/'}>
                Главная
              </Link>
              </Nav.Link>

              <Nav.Link>
              <Link style={{textDecoration: 'none', color:'white', fontSize:'21px', fontFamily:'fantasy'}} to={'/favorites'}>
                Избранное 
              </Link>
              </Nav.Link>

              <Nav.Link>
              <Link style={{textDecoration: 'none', color:'white', fontSize:'21px', fontFamily:'fantasy'}} to={'/cart'}>
                Корзина
              </Link>
              </Nav.Link>

              <Nav.Link>
              <Link style={{textDecoration: 'none', color:'white', fontSize:'21px', fontFamily:'fantasy'}} to={'/description'}>
                Описание
              </Link>
              </Nav.Link>
               
          </Nav>
          <Nav>
            <Button variant="primary">
                Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header