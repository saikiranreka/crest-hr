import { CREATE_DEPARTMENT } from "../constants";

export default (department) => ({
  type : CREATE_DEPARTMENT,
  payload : { department }
});
