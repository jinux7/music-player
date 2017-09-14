import React,{ Component } from 'react';
import { HashRouter, Route, Link, Switch} from 'react-router-dom';
import './home.less';
import Page1 from '../page1/page1.jsx';
import Page2 from '../page2/page2.jsx';
import Page3 from '../page3/page3.jsx';

export default class App extends Component {
	render() {
		return (
				<div className="home">
					<h1>music jinux</h1>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/page2">page1</Link></li>
						<li><Link to="/page3">page2</Link></li>
					</ul>
					<Route exact path="/" component={Page1} />
					<Route path="/page2" component={Page2} />
					<Route path="/page3" component={Page3} />
				</div>
		);
	}
}
