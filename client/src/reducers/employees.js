import {GET_EMPLOYEES, SET_EMPLOYEES, UPDATE_EMPLOYEE} from "../constants";

const defaultState = {
  loaded : false,
  data : null,
  saving : false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES :
      return Object.assign({}, state, { loaded : false });

    case SET_EMPLOYEES :
      return Object.assign({}, state, { loaded : true, data : action.payload.employees });

    case UPDATE_EMPLOYEE :
      if (state.data === null)
        return state;

      const index = state.data.findIndex(e => e.id === action.payload.employee.id);
      const newEmployees = (index === -1) ?
          [...state.data, action.payload.employee] :
          [...state.data.slice(0, index), action.payload.employee, ...state.data.slice(index + 1)];
      return Object.assign({}, state, { data : newEmployees, saving : false });

    default :
      return state;
  }
};
