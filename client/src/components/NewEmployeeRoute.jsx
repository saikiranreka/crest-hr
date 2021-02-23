import * as React from "react";
import {withTitle} from "./hoc/withTitle";
import {connect} from "react-redux";
import createEmployee from "../actions/createEmployee";
import EmployeeForm from "./EmployeeForm";
import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";
import Grid from "react-bootstrap/es/Grid";
import {Link, Redirect} from "react-router-dom";
import {Fragment} from "react";

class NewEmployeeRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = { saving : false };
  }

  onSubmit = (employee) => {
    this.setState({ saving : true });
    this.props.dispatch(createEmployee(employee));
  };

  render() {
    const { saving : localSaving } = this.state;
    const { saving } = this.props;

    if (localSaving && !saving) {
      return <Redirect to={"/employees"} push />;
    }

    return (
        <Fragment>
          <ol className={"breadcrumb"}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to="/employees">Employees</Link></li>
            <li className={"active"}>New Employee</li>
          </ol>

          <h2>New Employee</h2>

          <Grid fluid>
            <Row>
              <Col sm={6}>
                <EmployeeForm
                    employee={{}}
                    saving={saving}
                    onSubmit={this.onSubmit}
                />
              </Col>
            </Row>
          </Grid>
        </Fragment>
    );
  }
}

NewEmployeeRoute.propTypes = {};

const mapStateToProps = (state) => ({
  saving : state.employee.saving,
});

export default connect(mapStateToProps)(withTitle("New Employee", NewEmployeeRoute));