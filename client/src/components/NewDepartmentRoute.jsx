import * as React from "react";
import {withTitle} from "./hoc/withTitle";
import {connect} from "react-redux";
import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";
import Grid from "react-bootstrap/es/Grid";
import {Link, Redirect} from "react-router-dom";
import {Fragment} from "react";
import DepartmentForm from "./DepartmentForm";
import createDepartment from "../actions/createDepartment";

class NewDepartmentRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = { saving : false };
  }

  onSubmit = (department) => {
    this.setState({ saving : true });
    this.props.dispatch(createDepartment(department));
  };

  render() {
    const { saving : localSaving } = this.state;
    const { saving } = this.props;

    if (localSaving && !saving) {
      return <Redirect to={"/departments"} push />;
    }

    return (
        <Fragment>
          <ol className={"breadcrumb"}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li className={"active"}>New Department</li>
          </ol>

          <h2>New Department</h2>

          <Grid fluid>
            <Row>
              <Col sm={6}>
                <DepartmentForm
                    department={{}}
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

NewDepartmentRoute.propTypes = {};

const mapStateToProps = (state) => ({
  saving : state.department.saving,
});

export default connect(mapStateToProps)(withTitle("New Department", NewDepartmentRoute));