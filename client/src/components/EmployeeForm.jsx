import * as React from "react";
import * as PropTypes from "prop-types";
import LoadSpinner from "./LoadSpinner";

const DEFAULT_STATE = {
  firstName : "",
  lastName : "",
};

class EmployeeForm extends React.Component {

  constructor(props) {
    super(props);
    const employee = (this.props.employee.firstName === undefined) ? DEFAULT_STATE : this.props.employee;
    this.state = { employee : Object.assign({}, employee) };
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.employee);
  };

  onFirstNameChange = (evt) => {
    this.setState({ employee : Object.assign({}, this.state.employee, { firstName : evt.target.value })});
  };

  onLastNameChange = (evt) => {
    this.setState({ employee : Object.assign({}, this.state.employee, { lastName : evt.target.value })});
  };

  render() {
    const { employee } = this.state;
    const { saving } = this.props;

    return (
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name"
                   value={employee.firstName}
                   disabled={saving}
                   required onChange={this.onFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name"
                   value={employee.lastName}
                   disabled={saving}
                   required onChange={this.onLastNameChange} />
          </div>

          { saving && (
              <button className={"btn btn-primary"} disabled><LoadSpinner text={"Saving..."}/></button>
          )}
          { !saving && (
              <input type="submit" className={"btn btn-primary"} value={"Submit"} />
          )}
        </form>
    );
  }
}

EmployeeForm.propTypes = {
  employee : PropTypes.object.isRequired,
  saving : PropTypes.bool.isRequired,
  onSubmit : PropTypes.func.isRequired,
};

export default EmployeeForm;