import React from 'react';

// redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

// our application's behavior
import reducer from '../reducers/reducer';
import LoaderGatedApplication from './LoaderGatedApplication';

// create the storage engine
const engine = createEngine('cached-state');
const storageMiddleware = storage.createMiddleware(engine);

// initialize a global store
const store = createStore(reducer, applyMiddleware(thunk, storageMiddleware));

// init datastores in the app
const load = storage.createLoader(engine);
load(store).then(loadedState => {
  // TODO load from services after loading from storage
});

const App = props => (
  <Provider store={store}>
    <LoaderGatedApplication />
  </Provider>
);

export default App;
