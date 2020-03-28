import React from "react";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Container from "react-bootstrap/Container";
import "./sass/style.scss";
import GameDetails from "./components/gamedetails/GameDetails";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
    <Router>
    <Navbar bg="danger" variant="dark" expand="lg">
    <Navbar.Brand href="/">Video game details</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/contact/">Contact</Nav.Link>
    </Nav>
  </Navbar>
  <Container>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/game/:id" component={GameDetails} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </Container>
  </Router>
    )
}

export default App;
