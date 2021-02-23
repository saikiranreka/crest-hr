import {SAVE_EMPLOYEE} from "../constants";
import updateEmployee from "../actions/updateEmployee";
import {Api} from "../Api";

export default {
  [SAVE_EMPLOYEE] : (action, dispatch, state) => {
    Api.put(`/employees/${state.employee.selectedEmployeeId}`, action.payload.employee)
        .then((employee) => {
          dispatch(updateEmployee(employee));
        })
  },
};
