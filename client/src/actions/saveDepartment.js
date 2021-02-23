import {SAVE_DEPARTMENT} from "../constants";

export default (department) => ({
  type : SAVE_DEPARTMENT,
  payload : { department },
});
