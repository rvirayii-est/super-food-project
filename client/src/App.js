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
import AdminSignUp from 'pages/admin/auth/AdminSignUp';
import AdminAuthRoute from 'routes/AdminAuthRoute';
import AdminLogin from 'pages/admin/auth/AdminLogin';
// landing
import Landing from 'pages/customer/landing/Landing';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <CustomerRoute exact path="/" component={Landing} />
          <AuthRoute exact path="/register" component={SignUp} />

          {/* SECTION Admin */}
          <AdminAuthRoute exact path="/admin/register" component={AdminSignUp} />
          <AdminAuthRoute exact path="/admin/login" component={AdminLogin} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
