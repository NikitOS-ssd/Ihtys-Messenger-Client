import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./Components/Authorization";
import Chat from "./Components/Chat";
import { connect } from "react-redux";

function App(props) {

  React.useEffect(() => {
    console.log(localStorage);
  }, [])

  return (
    <>
      <main>
        <section className="glass">
          {props.user.isAuth ? (
            <Switch>
              <Route exact path="/" component={Chat} />
              <Route path="/chat" component={Chat} />

              <Route>
                <Redirect to="/chat" />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route path="/login" component={Auth} />
              <Route path="/register" component={Auth} />

              <Route>
                <Redirect to="/register" />
              </Route>
            </Switch>
          )}
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
