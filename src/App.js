import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./Components/Authorization";
import Chat from "./Components/Chat";
import { connect } from "react-redux";

function App(props) {

  React.useEffect(() => {
    const s = localStorage.getItem('us');
    localStorage.setItem('us', +s+1);
    console.log(localStorage);
  }, [])

  return (
    <>
      <main>
        <section className="glass">
          {props.user.isAuth ? (
            <Chat />
          ) : (
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route path="/auth" component={Auth} />
              {/* <Route path="/chat" component={Chat} /> */}

              <Route>
                <Redirect to="/auth" />
              </Route>
            </Switch>
          )}
          {/* <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/auth" component={Auth} />
            <Route path="/chat" component={Chat} />

            <Route>
              <Redirect to="/auth" />
            </Route>
          </Switch> */}
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
