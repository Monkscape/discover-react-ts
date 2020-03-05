import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import GreeterFunctional from './GreeterFunctional';
import PayeesManager from './payees/PayeesManager';
import ObjectManager from './ObjectManager';
import { ColumnConfig, Payee } from './payees/payees-types';
import ReduxCounter from './redux/ReduxCounter';
import ReduxCounterToolkit from './redux/ReduxCounterToolkit'

const accountColumns: ColumnConfig<Account>[] = [
  {
      field: 'id',
      label: 'ID'
  },
  {
      field: 'startingBalance',
      label: 'Starting Balance'
  }
]

const columns: ColumnConfig<Payee>[] = [
  {
      field: 'payeeName',
      label: 'Payee Name'
  },
  {
      field: 'address.city',
      label: 'City'
  },
  {
      field: 'address.state',
      label: 'State'
  },
  {
      field: 'active',
      label: 'Active'
  }
]

function App() {
  return (
    <Router>
      <section className="section">
        <div className="container">
          <GreeterFunctional 
            company = "Discover Financial Services"
          />
          <div>
            <p>
              <NavLink to="/payees">Payees</NavLink> | 
              <NavLink to="/accounts">Accounts</NavLink> | 
              <NavLink to="/counter">Counters</NavLink> |
              <NavLink to="/counter/new">Counters (Toolkit)</NavLink>
            </p>
          </div>
          <Switch>
            <Route path="/payees">
              <PayeesManager searchColumn={columns[0]} displayColumns={columns}/>
            </Route>
            <Route path="/accounts">
              <ObjectManager 
                displayColumns={accountColumns}
                url='http://localhost:8000/api/v1/banking/accounts'
              />
            </Route>
            <Route path="/counter">
              <ReduxCounter />
            </Route>
            <Route>
              <ReduxCounterToolkit />
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  );
}

export default App;
