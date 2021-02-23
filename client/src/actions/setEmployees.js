import {SET_EMPLOYEES} from "../constants";

export default (employees) => ({
  type : SET_EMPLOYEES,
  payload : { employees },
});
