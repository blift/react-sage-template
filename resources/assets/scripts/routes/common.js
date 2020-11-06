/* eslint-disable */
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.js';

export default {
  init() {
    ReactDom.render(<App/>, document.getElementById('react-app'));
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
