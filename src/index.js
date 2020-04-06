// ------------------------------------------------------------
// Dành cho những project không có redux

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

// ------------------------------------------------------------
// Dành cho những project có redux

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// // ------------------------------------------------------------
// // Phần redux
// // Store
// import { createStore } from 'redux';
// import myReducer from './redux/reducers/index';
// import { Provider } from 'react-redux';

// const store = createStore(
//     myReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// // ------------------------------------------------------------
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
// serviceWorker.unregister();
