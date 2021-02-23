import {UPDATE_DEPARTMENT} from "../constants";

export default (department) => ({
  type : UPDATE_DEPARTMENT,
  payload : { department },
});
