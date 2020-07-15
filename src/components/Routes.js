import React from "react";
import { BrowserRouter, Route, Redirect, Switch, useParams } from "react-router-dom";
import List from "../pages/List";
import Form from "../pages/Form";
import Edit from "../pages/Edit";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={List} />
        <Route path="/create" component={Form} />
        <Route path="/edit/:id" component={Edit} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};
