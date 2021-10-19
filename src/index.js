import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Login} from './Login';
import {Dashboard} from './Dashboard'
// import { Dashboard2 } from './Dashboard2';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {allReducers} from './reducers';
// import AddUsers from './components/AddUsers'
// import "bootstrap/dist/css/bootstrap.min.css"

const store = createStore(allReducers);

const routes = (
  <BrowserRouter>
  <Provider store = {store}>
    <Switch>
      <Route exact path = "/" component={Login}/>
      <Route exact path = "/dashboard" component = {Dashboard}/>
      {/* <Route exact path = "/dashboard/addUser" component = {AddUsers} /> */}
      <Route render = {() => <h1>Page Not Found</h1>}/>
    </Switch>
    </Provider>
  </BrowserRouter>
)


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {routes}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
