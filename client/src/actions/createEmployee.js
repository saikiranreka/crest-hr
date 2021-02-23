import { CREATE_EMPLOYEE } from "../constants";

export default (employee) => ({
  type : CREATE_EMPLOYEE,
  payload : { employee }
});
