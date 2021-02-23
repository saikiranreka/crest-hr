import reduxThunk from "redux-thunk";
import {applyMiddleware} from "redux";
import listeners from "./listeners";
import employeesFetcher from "./employeesFetcher";
import employeeSaver from "./employeeSaver";
import employeeFetcher from "./employeeFetcher";
import employeeCreator from "./employeeCreator";
import departmentsFetcher from "./departmentsFetcher";
import departmentFetcher from "./departmentFetcher";
import departmentSaver from "./departmentSaver";
import departmentCreator from "./departmentCreator";

export const middleware = applyMiddleware(
    reduxThunk,
    listeners(
        employeesFetcher,
        employeeFetcher,
        employeeSaver,
        employeeCreator,
        departmentsFetcher,
        departmentFetcher,
        departmentSaver,
        departmentCreator,
    )
);