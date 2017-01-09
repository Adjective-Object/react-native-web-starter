/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
// the root component
import App from './src/components/App';

console.log('app is', App);

ReactDOM.render(<App />, document.getElementById('react-host'));
