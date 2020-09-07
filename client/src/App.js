import React from 'react';

// redux
import { Provider } from 'react-redux';
import store from 'store/store';

// route
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRoute from 'routes/AuthRoute';
import CustomerRoute from 'routes/CustomerRoute';

// pages
// SECTION customer
// auth
import SignUp from 'pages/customer/auth/SignUp';
import Landing from 'pages/customer/landing/Landing';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <CustomerRoute exact path="/" component={Landing} />
          <AuthRoute exact path="/register" component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
