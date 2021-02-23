import {SAVE_DEPARTMENT} from "../constants";
import updateDepartment from "../actions/updateDepartment";
import { Api } from "../Api";

export default {
  [SAVE_DEPARTMENT] : (action, dispatch, state) => {
    Api.put(`/departments/${state.department.selectedDepartmentId}`, action.payload.department)
        .then((department) => dispatch(updateDepartment(department)));
  },
}