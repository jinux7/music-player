import React,{ Component } from 'react';
import { HashRouter, Route, Link, Switch} from 'react-router-dom';
import NavSinger from './navSinger.jsx';
import SongList from './songList.jsx';
import PlayerPanelBottom from '../smallCom/playerPanelBottom/playerPanelBottom.jsx';

export default class RadioPage extends Component {
	constructor(props){
		super(props);
	}

	

	render(){
		return (
			<div>
				<Route exact path="/" component={NavSinger} />
				<Route path="/songlist/:singer" component={SongList} />
				<PlayerPanelBottom />
			</div>
		)
	}
}
