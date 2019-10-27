import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import UserStore from './components/UserStore'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// You can choose your kind of history here (e.g. browserHistory)
import { BrowserRouter } from 'react-router-dom';
// Your routes.js file

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
 <UserStore>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserStore>
), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


