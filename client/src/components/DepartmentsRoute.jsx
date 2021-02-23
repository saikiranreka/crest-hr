import * as React from "react";
import Table from "react-bootstrap/es/Table";
import {Link} from "react-router-dom";
import {withTitle} from "./hoc/withTitle";
import {connect} from "react-redux";
import LoadSpinner from "./LoadSpinner";
import getDepartments from "../actions/getDepartments";

class DepartmentsRoute extends React.Component {

  componentWillMount() {
    this.props.dispatch(getDepartments());
  }

  render() {
    const { departments, loaded } = this.props;

    return (
        <div>
          <ol className={"breadcrumb"}>
            <li><Link to={"/"}>Home</Link></li>
            <li className={"active"}>Departments</li>
          </ol>

          <div className={"pull-right"}>
            <Link to="/departments/new" className={"btn btn-success btn-sm"}>
                <i className={"fa fa-plus"} />&nbsp;Add Department
            </Link>
          </div>
          <h2>Department List</h2>

          { !loaded && (
            <LoadSpinner text={"Fetching department data..."} />
          )}

          { loaded && departments.length === 0 && (
            <p><em>Sadly, there are no departments yet!</em></p>
          )}

          { loaded && departments.length > 0 && (
            <Table striped bordered hover condensed>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Identifier</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
              { departments.map(this.renderDepartmentRow) }
              </tbody>
            </Table>
          )}

        </div>
    );
  }

  renderDepartmentRow = (department) => (
      <tr key={department.id}>
        <td>{ department.id }</td>
        <td>{ department.name }</td>
        <td>{ department.identifier }</td>
        <td>
          <Link to={`/departments/${department.id}`} className={"btn btn-xs btn-primary"}>Edit</Link>
        </td>
      </tr>
  );
}

const mapStateToProps = (state) => ({
  departments : state.departments.data,
  loaded : state.departments.loaded,
});

export default connect(mapStateToProps)(withTitle("Departments", DepartmentsRoute));