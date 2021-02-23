import {SET_SELECTED_DEPARTMENT_ID} from "../constants";

export default (departmentId) => ({
  type : SET_SELECTED_DEPARTMENT_ID,
  payload : { departmentId : parseInt(departmentId, 10), },
});
