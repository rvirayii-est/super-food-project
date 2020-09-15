import React from 'react';

// redux
import { Provider } from 'react-redux';
import store from 'store/store';

// route
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// customer routes
import AuthRoute from 'routes/AuthRoute';
import CustomerRoute from 'routes/CustomerRoute';

import CenteredRoute from 'routes/CenteredRoute';
// admin routes
import AdminAuthRoute from 'routes/AdminAuthRoute';
import DashboardRoute from 'routes/DashboardRoute';

// pages
// SECTION customer
// auth
import SignUp from 'pages/customer/auth/SignUp';
import AdminSignUp from 'pages/admin/auth/AdminSignUp';
// landing
import Landing from 'pages/customer/landing/Landing';
// centered
import ForgotPassword from 'pages/customer/auth/ForgotPassword';


// SECTION admin
// auth
import AdminLogin from 'pages/admin/auth/AdminLogin';
// dashboard overviews
import DashboardOverview from 'pages/admin/dashboard/overview/DashboardOverview';
import UsersOverview from 'pages/admin/dashboard/overview/UsersOverview';
import DeliveriesOverview from 'pages/admin/dashboard/overview/DeliveriesOverview';
import MerchantsOverview from 'pages/admin/dashboard/overview/MerchantsOverview';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* SECTION Customer */}
          <CustomerRoute exact path="/" component={Landing} />
          <AuthRoute exact path="/register" component={SignUp} />
          {/* centered */}
          <CenteredRoute exact path="/forgot-password" component={ForgotPassword} />

          {/* SECTION Admin */}
          <AdminAuthRoute exact path="/admin/register" component={AdminSignUp} />
          <AdminAuthRoute exact path="/admin/login" component={AdminLogin} />
          {/* overviews */}
          <DashboardRoute exact path="/admin/dashboard" component={DashboardOverview} />
          <DashboardRoute exact path="/admin/users" component={UsersOverview} />
          <DashboardRoute exact path="/admin/deliveries" component={DeliveriesOverview} />
          <DashboardRoute exact path="/admin/merchants" component={MerchantsOverview} />

          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
