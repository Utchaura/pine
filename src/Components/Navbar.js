import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Alarms from './Alarms';
import Analyze from './Analyze';
import Connect from './Connect';
import Insights from './Insights';
import Reports from './Reports';

function CollapsibleExample() {
  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="C:\Users\Lenovo\Downloads\Cx2lruouPMUnTHdaRZP6QV.jpg"
             className="d-inline-block align-top"
              alt="DATAPINE"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"./connect"}>CONNECT</Nav.Link>
            <Nav.Link as={Link} to={"./analyze"}>ANALYZE</Nav.Link>

            <NavDropdown title="DASGBOARDS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
             </NavDropdown>

            <Nav.Link as={Link} to={"./reports"}>REPORTS</Nav.Link>
            <Nav.Link as={Link} to={"./alarms"}>ALARMS</Nav.Link>
            <Nav.Link as={Link} to={"./insights"}>INSIGHTS</Nav.Link>
          </Nav>

          <Nav>
          <Nav.Link as={Link} to={"./connect"}>Premium expires in 14 days </Nav.Link>
          <NavDropdown title="EV" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">German</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Russian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Italian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Swedish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Slovak</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Czech</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Croation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Chinese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Danish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dutch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jaspanese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Polish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Portuguese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Koresan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Finnish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Naewegian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Thai</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Indonesian</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    <Switch>
          <Route path="/connect"><Connect/> </Route>
          <Route path="/analyze"><Analyze /></Route>
          <Route path="/reports"><Reports/> </Route>
          <Route path="/alarms"><Alarms /> </Route>
          <Route path="/insights"><Insights /> </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default CollapsibleExample;