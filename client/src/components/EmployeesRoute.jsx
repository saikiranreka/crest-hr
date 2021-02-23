import * as React from "react";
import Table from "react-bootstrap/es/Table";
import {Link} from "react-router-dom";
import {withTitle} from "./hoc/withTitle";
import {connect} from "react-redux";
import LoadSpinner from "./LoadSpinner";
import getEmployees from "../actions/getEmployees";

class EmployeesRoute extends React.Component {

  componentWillMount() {
    this.props.dispatch(getEmployees());
  }

  render() {
    const { employees, loaded } = this.props;

    return (
        <div>
          <ol className={"breadcrumb"}>
            <li><Link to={"/"}>Home</Link></li>
            <li className={"active"}>Employees</li>
          </ol>

          <div className={"pull-right"}>
            <Link to="/employees/new" className={"btn btn-success btn-sm"}>
                <i className={"fa fa-plus"} />&nbsp;Add Employee
            </Link>
          </div>
          <h2>Employee List</h2>

          { !loaded && (
            <LoadSpinner text={"Fetching employee data..."} />
          )}

          { loaded && employees.length === 0 && (
            <p><em>Sadly, there are no employees yet!</em></p>
          )}

          { loaded && employees.length > 0 && (
            <Table striped bordered hover condensed>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
              { employees.map(this.renderEmployeeRow) }
              </tbody>
            </Table>
          )}

        </div>
    );
  }

  renderEmployeeRow = (employee) => (
      <tr key={employee.id}>
        <td>{ employee.id }</td>
        <td>{ employee.firstName }</td>
        <td>{ employee.lastName }</td>
        <td>
          <Link to={`/employees/${employee.id}`} className={"btn btn-xs btn-primary"}>Edit</Link>
        </td>
      </tr>
  );
}

const mapStateToProps = (state) => ({
  employees : state.employees.data,
  loaded : state.employees.loaded,
});

export default connect(mapStateToProps)(withTitle("Employees", EmployeesRoute));