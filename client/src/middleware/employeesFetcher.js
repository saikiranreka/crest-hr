import {GET_EMPLOYEES} from "../constants";
import setEmployees from "../actions/setEmployees";
import {Api} from "../Api";

export default {
  [GET_EMPLOYEES] : (action, dispatch, state) => {
    Api.get("/employees")
        .then((employees) => {
          dispatch(setEmployees(employees));
        })
  },
}