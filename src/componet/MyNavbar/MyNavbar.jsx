import { React } from "react";
import Nav from "react-bootstrap/Nav";

const MyNavbar = () => {
  return (
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">HOMEPAGE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">contatti</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MyNavbar;
