import {SET_SELECTED_EMPLOYEE_ID} from "../constants";
import setEmployee from "../actions/setEmployee";
import {Api} from "../Api";

export default {
  [SET_SELECTED_EMPLOYEE_ID] : (action, dispatch, state) => {
    Api.get(`/employees/${action.payload.employeeId}`)
        .then((employee) => {
          dispatch(setEmployee(employee));
        })
  },
};
