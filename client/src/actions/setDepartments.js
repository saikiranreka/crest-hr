import {SET_DEPARTMENTS} from "../constants";

export default (departments) => ({
  type : SET_DEPARTMENTS,
  payload : { departments },
});
