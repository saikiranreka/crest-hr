import {GET_DEPARTMENTS} from "../constants";
import setDepartments from "../actions/setDepartments";
import { Api } from "../Api";

export default {
  [GET_DEPARTMENTS] : (action, dispatch, state) => {
    Api.get("/departments")
        .then((departments) => {
          dispatch(setDepartments(departments));
        })
  },
}
