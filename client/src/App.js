import React from 'react';

// redux
import { Provider } from 'react-redux';
import store from 'store/store';

// route
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRoute from 'routes/AuthRoute';

// pages
// customer
import SignUp from 'pages/customer/auth/SignUp';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <AuthRoute exact path="/register" component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
