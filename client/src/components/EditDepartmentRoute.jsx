import * as React from "react";
import {connect} from "react-redux";
import LoadSpinner from "./LoadSpinner";
import Link from "react-router-dom/es/Link";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import {withTitle} from "./hoc/withTitle";
import {Redirect} from "react-router-dom";
import setSelectedDepartmentId from "../actions/setSelectedDepartmentId";
import saveDepartment from "../actions/saveDepartment";
import DepartmentForm from "./DepartmentForm";

class EditDepartmentRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = { saving : false };
  }

  componentWillMount() {
    this.props.dispatch(setSelectedDepartmentId(this.props.match.params.id));
  }

  componentWillReceiveProps(props) {
    if (this.props.match.params.id !== props.match.params.id)
      this.props.dispatch(setSelectedDepartmentId(props.match.params.id));
  }

  onSubmit = (department) => {
    this.setState({ saving : true });
    this.props.dispatch(saveDepartment(department));
  };

  render() {
    const { saving : localSaving } = this.state;
    const { saving, department, loaded } = this.props;

    if (loaded && department === undefined)
      return <Redirect to={"/notFound"} />;

    if (localSaving && !saving)
      return <Redirect to={"/departments"} push />;

    return (
        <div>
          <ol className={"breadcrumb"}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li className={"active"}>Edit Department</li>
          </ol>

          <h2>Edit Department</h2>

          { !loaded && (
            <LoadSpinner text={"Loading department details..."} />
          )}

          { loaded && (
            <Grid fluid>
              <Row>
                <Col sm={6}>
                  <DepartmentForm
                      department={department}
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

EditDepartmentRoute.propTypes = {};

const mapStateToProps = (state) => ({
  department : state.department.data,
  loaded : state.department.loaded,
  saving : state.department.saving,
});

export default connect(mapStateToProps)(withTitle("Edit Department", EditDepartmentRoute));