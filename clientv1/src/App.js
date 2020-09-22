import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

// redux
import { Provider } from "react-redux";
import store from "./store/store";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./shard-styles/shards-dashboards.css";
import "./shard-styles/scss/main.scss";

// redux
import { loadUser } from "./store/actions/auth.action";
import setAuthToken from "./store/utilities/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default () => {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);
  return (
    <Provider store={store}>
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })}
        </div>
      </Router>
    </Provider>
  );
};
