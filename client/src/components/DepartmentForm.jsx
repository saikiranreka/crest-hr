import * as React from "react";
import * as PropTypes from "prop-types";
import LoadSpinner from "./LoadSpinner";

const DEFAULT_DEPARTMENT = {
  name : "",
  identifier : "",
};

class DepartmentForm extends React.Component {

  constructor(props) {
    super(props);
    const department = (this.props.department.name === undefined) ? DEFAULT_DEPARTMENT : this.props.department;
    this.state = { department : Object.assign({}, department) };
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.department);
  };

  onNameChange = (evt) => {
    this.setState({ department : Object.assign({}, this.state.department, { name : evt.target.value })});
  };

  onIdentifierChange = (evt) => {
    this.setState({ department : Object.assign({}, this.state.department, { identifier : evt.target.value })});
  };

  render() {
    const { department } = this.state;
    const { saving } = this.props;

    return (
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name"
                   value={department.name}
                   disabled={saving}
                   required
                   onChange={this.onNameChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="identifier">Identifier</label>
            <input type="text" className="form-control" id="identifier" placeholder="Identifier (######)"
                   value={department.identifier}
                   disabled={saving}
                   required onChange={this.onIdentifierChange} />
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

DepartmentForm.propTypes = {
  department : PropTypes.object.isRequired,
  saving : PropTypes.bool.isRequired,
  onSubmit : PropTypes.func.isRequired,
};

export default DepartmentForm;