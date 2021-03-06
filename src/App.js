import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import React, { useState } from "react";

function App() {
  const [authUser, setAuthUser] = useState("");

  const setLoginStatus = (token, name) => {
    setAuthUser(name);
    localStorage.setItem("token", token);
  };
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login setLoginStatus={setLoginStatus} />
        </Route>

        <ProtectedRoute path="/dashboard">
          <Dashboard username={authUser} />
        </ProtectedRoute>

        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
