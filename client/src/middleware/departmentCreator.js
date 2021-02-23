import {CREATE_DEPARTMENT} from "../constants";
import {Api} from "../Api";
import updateDepartment from "../actions/updateDepartment";

export default {
  [CREATE_DEPARTMENT] : (action, dispatch, state) => {
    Api.post(`/departments`, action.payload.department)
        .then((department) => {
          dispatch(updateDepartment(department));
        });
  },
};
