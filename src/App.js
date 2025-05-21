// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import HomePage from './components/HomePage';
import ComparisonTool from './components/ComparisonTool';
import QuickReference from './components/QuickReference';
import DecisionFlowchart from './components/DecisionFlowchart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container rtl">
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">מרכז כלי CRM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">דף הבית</Nav.Link>
                <Nav.Link as={Link} to="/comparison">השוואת מערכות</Nav.Link>
                <Nav.Link as={Link} to="/reference">כרטיסיות מידע</Nav.Link>
                <Nav.Link as={Link} to="/flowchart">תרשים החלטה</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4 mb-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comparison" element={<ComparisonTool />} />
            <Route path="/reference" element={<QuickReference />} />
            <Route path="/flowchart" element={<DecisionFlowchart />} />
          </Routes>
        </Container>

        <footer className="bg-dark text-white py-3 text-center">
          <Container>
            <p className="mb-0">© {new Date().getFullYear()} מרכז כלי CRM. כל הזכויות שמורות.</p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;