import React,{ Component } from 'react';
import { HashRouter, Route, Link, Switch} from 'react-router-dom';
import NavSinger from './navSinger.jsx';
import SongList from './songList.jsx';
import PlayerPanelBottom from '../smallCom/playerPanelBottom/playerPanelBottom.jsx';

export default class RadioPage extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		$('#player').jPlayer({
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true
		});
		/*setTimeout(function(){
			$("#player").jPlayer("setMedia", {
				mp3: 'http://yinyueshiting.baidu.com/data2/music/42783748/42783748.mp3?xcode=bc9405b2949438d143e6e1d8249fc792'
			}).jPlayer('play');
		},1000);*/
	}

	render(){
		return (
			<div>
				<div id="player"></div>
				<Route exact path="/" component={NavSinger} />
				<Route path="/songlist/:singer" component={SongList} />
				<PlayerPanelBottom />
			</div>
		)
	}
}
