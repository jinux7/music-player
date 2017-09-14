//require('babel-polyfill');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Home from './components/home/home.jsx';
import './css/style.less';
require('./js/jquery.min.js');
require('./js/jquery.jplayer.min.js');

render(
	(<HashRouter>
    <Home />
  </HashRouter>),
	document.querySelector('#root')
);