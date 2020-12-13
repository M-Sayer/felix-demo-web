import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Util Components
import { Header } from './components/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute/PublicOnlyRoute';

// Main Components
// import DashboardRoute from '../../routes/DashboardRoute';
// import GoalsRoute from '../../routes/GoalsRoute';
// import GoalRoute from '../../routes/GoalRoute';
// import GoalFormRoute from '../../routes/GoalFormRoute';
// import CreateTransactionRoute from '../../routes/CreateTransactionRoute';
// import TransactionsRoute from '../../routes/TransactionsRoute';
// import TransactionRoute from '../../routes/TransactionRoute/TransactionRoute';
// import AlertsRoute from '../../routes/AlertsRoute';

// // Authentication & Registration Components
// import LoginRoute from '../../routes/LoginRoute';
// import { RegistrationRoute } from '../../routes/RegistrationRoute';
// import LandingRoute from '../../routes/LandingRoute';
import { EmailRoute } from './routes/EmailRoute';

const App = () => {

  return (
    <>
      <Header />
      <div className='App'>
        <Switch>
          {/* <PrivateRoute
            exact
            path={'/'}
            comp={DashboardRoute}
          />
    
          <PrivateRoute
            exact
            path={'/goals'}
            comp={GoalsRoute}
          />

          <PrivateRoute
            path={'/goal/add'}
            comp={GoalFormRoute}
          />

          <PrivateRoute
            path={'/goal/:type/:id'}
            comp={GoalFormRoute}
          />

          <PrivateRoute
            exact
            path={'/goal/:id'}
            comp={GoalRoute}
          />
    
          <PrivateRoute 
            path={'/alerts'}
            comp={AlertsRoute}
          />

          <PrivateRoute
            path={'/createtransaction'}
            comp={CreateTransactionRoute}
          />

          <PrivateRoute
            path={'/transactions'}
            comp={TransactionsRoute}
          />

          <PrivateRoute
            path={'/transaction/:type/:id'}
            comp={TransactionRoute}
          />

          <PublicOnlyRoute
            path={'/login'}
            comp={LoginRoute}
          />

          <PublicOnlyRoute
            path={'/register'}
            comp={RegistrationRoute}
          />

          <Route
            path={'/about'}
            component={LandingRoute}
          /> */}

          <Route 
            path='/email/:token'
            component={EmailRoute}
          />

        </Switch>
      </div>
    </>
  );
};

export default App;