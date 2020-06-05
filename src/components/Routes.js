import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import List from "../pages/List";
import Form from "../pages/Form";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={List} />
        <Route path="/create" component={Form} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};
