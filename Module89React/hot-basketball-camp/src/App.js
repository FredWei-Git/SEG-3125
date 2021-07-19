import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown, Card } from 'react-bootstrap'
import Form from './components/Form';
import Video from './components/Videos';

function App() {
  return (
    <div className="App">
      <Navbar bg="MyBlack" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand>
          <img src="https://img.icons8.com/color/48/000000/basketball.png" alt="logo" />
          Hot Basketball Camp
        </Navbar.Brand>
        {/*Mobile Version*/}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Sign Up">
              <NavDropdown.Item href="signup">Camp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="signup">Coaching</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#videos">Videos</Nav.Link>
            <Nav.Link href="#schedule">Schedule</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">
        <h1>Sign Up</h1>
        <div id="signup">
          {/*Form*/}
          <Form />
        </div>
        <div id="about">
          <h1>About Us</h1>
          <h2>
            Hot Basketball Camp offers private coaching sessions as
            well as seasonal basketball camps for kids. Our programs are perfect for
            parents that want to give their kid experience in basketball and
            atheletes looking to improve their game.
            <img src="/basketballtraining.jpg" alt="training" />
          </h2>
        </div>
        <div id="videos">
          <h1>Videos</h1>
          <h2>Shooting Drills</h2>
          <Video embedId="IQ5FhUyta1Q" />
          <h2>Dribbling Drills</h2>
          <Video embedId="1K0rlzOXOZY" />
        </div>
        <div id="schedule">
          <h1>Schedule</h1>
          <Card style={{ width: '90rem', display: 'flex', flexDirection: 'row' }}>
            <Card.Body>
              <Card.Title>Monday</Card.Title>
              <Card.Text>
                Coach Jake
                <br></br>
                Coach David
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>Tuesday</Card.Title>
              <Card.Text>
                Coach Eric
                <br></br>
                Coach John
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>Wednesday</Card.Title>
              <Card.Text>
                Coach Jake
                <br></br>
                Coach David
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>Thursday</Card.Title>
              <Card.Text>
                Coach Eric
                <br></br>
                Coach John
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>Friday</Card.Title>
              <Card.Text>
                Coach Jake
                <br></br>
                Coach David
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>Saturday</Card.Title>
              <Card.Text>
                Coach James
                <br></br>
                Coach Jared
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>Sunday</Card.Title>
              <Card.Text>
                Coach James
                <br></br>
                Coach Jared
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div id="help">
          <h1>Help</h1>
          <h2>
            Contact Us at 123-456-7890 for assistance.
            <br></br>
            You can also drop by at 123 RedHorn Ave.
          </h2>
        </div>
      </div>

    </div>
  );
}

export default App;
