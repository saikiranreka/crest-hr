import * as React from "react";
import {withTitle} from "./hoc/withTitle";
import {Link} from "react-router-dom";

class HomeComponent extends React.Component {
  render() {
    return (
        <div>
          <h2>Welcome to Crest HR!</h2>

          <p>What would you like to do?</p>
          <ul>
            <li><Link to="/employees">Manage Employees</Link></li>
            <li><Link to="/departments">Manage Departments</Link></li>
          </ul>
        </div>
    );
  }
}

HomeComponent.propTypes = {};

export default withTitle("Home", HomeComponent);