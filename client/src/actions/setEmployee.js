import {SET_EMPLOYEE} from "../constants";

export default (employee) => ({
  type : SET_EMPLOYEE,
  payload : { employee },
});
