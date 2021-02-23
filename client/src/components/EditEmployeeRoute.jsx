import * as React from "react";
import {connect} from "react-redux";
import LoadSpinner from "./LoadSpinner";
import Link from "react-router-dom/es/Link";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import {withTitle} from "./hoc/withTitle";
import saveEmployee from "../actions/saveEmployee";
import {Redirect} from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import setSelectedEmployeeId from "../actions/setSelectedEmployeeId";

class EditEmployeeRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = { saving : false };
  }

  componentWillMount() {
    this.props.dispatch(setSelectedEmployeeId(this.props.match.params.id));
  }

  componentWillReceiveProps(props) {
    if (this.props.match.params.id !== props.match.params.id)
      this.props.dispatch(setSelectedEmployeeId(props.match.params.id));
  }

  onSubmit = (employee) => {
    this.setState({ saving : true });
    this.props.dispatch(saveEmployee(employee));
  };

  render() {
    const { saving : localSaving } = this.state;
    const { saving, employee, loaded } = this.props;

    if (loaded && employee === undefined)
      return <Redirect to={"/notFound"} />;

    if (localSaving && !saving)
      return <Redirect to={"/employees"} push />;

    return (
        <div>
          <ol className={"breadcrumb"}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to="/employees">Employees</Link></li>
            <li className={"active"}>Edit Employee</li>
          </ol>

          <h2>Edit Employee</h2>

          { !loaded && (
            <LoadSpinner text={"Loading employee details..."} />
          )}

          { loaded && (
            <Grid fluid>
              <Row>
                <Col sm={6}>
                  <EmployeeForm
                      employee={employee}
                      saving={saving}
                      onSubmit={this.onSubmit}
                  />
                </Col>
              </Row>
            </Grid>
          )}

        </div>
    );
  }
}

EditEmployeeRoute.propTypes = {};

const mapStateToProps = (state) => ({
  employee : state.employee.data,
  loaded : state.employee.loaded,
  saving : state.employee.saving,
});

export default connect(mapStateToProps)(withTitle("Edit Employee", EditEmployeeRoute));