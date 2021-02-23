import {SAVE_EMPLOYEE} from "../constants";

export default (employee) => ({
  type : SAVE_EMPLOYEE,
  payload : { employee },
});
