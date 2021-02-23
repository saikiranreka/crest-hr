import {SET_SELECTED_EMPLOYEE_ID} from "../constants";

export default (employeeId) => ({
  type : SET_SELECTED_EMPLOYEE_ID,
  payload : { employeeId : parseInt(employeeId, 10), },
});
