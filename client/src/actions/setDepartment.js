import {SET_DEPARTMENT} from "../constants";

export default (department) => ({
  type : SET_DEPARTMENT,
  payload : { department },
});
