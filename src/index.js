import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { thunk } from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'; 
// import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import { applyMiddleware, createStore ,Middleware} from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbFMkuzVJAxbxe8GYzymrS8k_FcUequ2I",
  authDomain: "resume-builder-ff300.firebaseapp.com",
  projectId: "resume-builder-ff300",
  storageBucket: "resume-builder-ff300.appspot.com",
  messagingSenderId: "54731770447",
  appId: "1:54731770447:web:5a8d45fa269576ea7b783a"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reduxStore = createStore( rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)));

ReactDOM.render(
    
    <BrowserRouter>
  <Provider store={reduxStore}>
  <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
      </Provider> 
  
    </BrowserRouter> 
,
  document.getElementById('root')
);