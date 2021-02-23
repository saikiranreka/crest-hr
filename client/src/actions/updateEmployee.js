import {UPDATE_EMPLOYEE} from "../constants";

export default (employee) => ({
  type : UPDATE_EMPLOYEE,
  payload : { employee },
});
