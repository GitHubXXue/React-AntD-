import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storageUtils from './utils/storageUtils'
// import { PersistGate } from 'redux-persist/lib/integration/react';
import Router from './router';
// import store, { persistor } from "./store";
import store from "./store";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <Provider store={store}> 
//         <PersistGate loading={null} persistor={persistor}>
//             <Router />
//         </PersistGate>
//     </Provider>,
//     document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <Router userToken={storageUtils.getCookie('userToken')} />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
