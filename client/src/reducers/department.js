import {
  CREATE_DEPARTMENT, SAVE_DEPARTMENT, SET_DEPARTMENT, SET_SELECTED_DEPARTMENT_ID,
  UPDATE_DEPARTMENT,
} from "../constants";

const defaultState = {
  loaded : false,
  data : null,
  selectedDepartmentId : null,
  saving : false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECTED_DEPARTMENT_ID :
      return Object.assign({}, state, { selectedDepartmentId : action.payload.departmentId, loaded : false, });

    case SET_DEPARTMENT :
      return Object.assign({}, state, { data : action.payload.department, loaded : true });

    case SAVE_DEPARTMENT :
      return Object.assign({}, state, { saving : true });

    case UPDATE_DEPARTMENT :
      return Object.assign({}, state, { saving : false });

    case CREATE_DEPARTMENT :
      return Object.assign({}, state, { saving : true });

    default :
      return state;
  }
};
