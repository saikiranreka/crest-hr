import {CREATE_EMPLOYEE} from "../constants";
import updateEmployee from "../actions/updateEmployee";
import {Api} from "../Api";

export default {
  [CREATE_EMPLOYEE] : (action, dispatch, state) => {
    Api.post(`/employees`, action.payload.employee)
        .then((employee) => {
          dispatch(updateEmployee(employee));
        });
  },
};
