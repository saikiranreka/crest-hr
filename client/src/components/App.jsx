import React, { Component } from 'react';
import {Provider} from "react-redux";
import store from "../store";
import Header from "./Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeRoute from "./HomeRoute";
import Grid from "react-bootstrap/es/Grid";
import Col from "react-bootstrap/es/Col";
import NotFoundRoute from "./NotFoundRoute";
import EmployeesRoute from "./EmployeesRoute";
import EditEmployeeRoute from "./EditEmployeeRoute";
import NewEmployeeRoute from "./NewEmployeeRoute";
import DepartmentsRoute from "./DepartmentsRoute";
import EditDepartmentRoute from "./EditDepartmentRoute";
import NewDepartmentRoute from "./NewDepartmentRoute";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />

            <Grid>
              <Col sm={12}>
                <Switch>
                  <Route path="/" exact component={HomeRoute} />
                  <Route path="/employees" exact component={EmployeesRoute} />
                  <Route path="/employees/new" exact component={NewEmployeeRoute} />
                  <Route path="/employees/:id" exact component={EditEmployeeRoute} />

                  <Route path="/departments" exact component={DepartmentsRoute} />
                  <Route path="/departments/new" exact component={NewDepartmentRoute} />
                  <Route path="/departments/:id" exact component={EditDepartmentRoute} />
                  <Route component={NotFoundRoute} />
                </Switch>
              </Col>
            </Grid>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
