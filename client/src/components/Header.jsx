import * as React from "react";
import Navbar from "react-bootstrap/es/Navbar";
import {Link} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Crest HR</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
    );
  }
}

export default Header;