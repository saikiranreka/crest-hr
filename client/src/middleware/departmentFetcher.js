import {SET_SELECTED_DEPARTMENT_ID} from "../constants";
import setDepartment from "../actions/setDepartment";
import { Api } from "../Api";

export default {
  [SET_SELECTED_DEPARTMENT_ID] : (action, dispatch, state) => {
    Api.get(`/departments/${action.payload.departmentId}`)
        .then((employee) => {
          dispatch(setDepartment(employee));
        });
  },
}
