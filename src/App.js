import React, { Component } from "react";
import Messages from "./components/messages";
import MessageForm from "./components/messageForm";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/messages/:id" component={MessageForm} />
            <Route path="/messages" component={Messages} />} />
            <Redirect from="/" exact to="/messages" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
