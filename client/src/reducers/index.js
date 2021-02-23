import {combineReducers} from "redux";
import employees from "./employees";
import employee from "./employee";
import departments from "./departments";
import department from "./department";

export default combineReducers({
  employees,
  employee,
  departments,
  department,
});
