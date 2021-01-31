import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./Components/Authorization";
import Chat from "./Components/Chat";

function App() {
  return (
    <>
      <main>
        <section className="glass">
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/auth" component={Auth} />
            <Route path="/chat" component={Chat} />

            <Route>
              <Redirect to="/auth" />
            </Route>
          </Switch>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default App;
