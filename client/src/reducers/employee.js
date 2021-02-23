import {CREATE_EMPLOYEE, SAVE_EMPLOYEE, SET_EMPLOYEE, SET_SELECTED_EMPLOYEE_ID, UPDATE_EMPLOYEE} from "../constants";

const defaultState = {
  loaded : false,
  data : null,
  selectedEmployeeId : null,
  saving : false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECTED_EMPLOYEE_ID :
      return Object.assign({}, state, { selectedEmployeeId : action.payload.employeeId, loaded : false, });

    case SET_EMPLOYEE :
      return Object.assign({}, state, { data : action.payload.employee, loaded : true });

    case SAVE_EMPLOYEE :
      return Object.assign({}, state, { saving : true });

    case UPDATE_EMPLOYEE :
      return Object.assign({}, state, { saving : false });

    case CREATE_EMPLOYEE :
      return Object.assign({}, state, { saving : true });

    default :
      return state;
  }
};
