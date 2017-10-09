import React,{ Component } from 'react';
import { HashRouter, Route, Link, Switch} from 'react-router-dom';
import './home.less';
import RadioPage from '../radio/radio.jsx';
import Page2 from '../page2/page2.jsx';
import Page3 from '../page3/page3.jsx';
let PubSub = require('pubsub-js'); //事件触发module

export default class App extends Component {
	constructor(props){
		super(props);

		this.playMusic = this.playMusic.bind(this);
	}

	componentDidMount(){
		$('#player').jPlayer({
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true
		});

		//利用pubsub-js绑定音乐播放的一些事件
		PubSub.subscribe('PLAY_MUSIC', (msg, item) => {
			this.playMusic(item);
		});
		PubSub.subscribe('PAUSE_MUSIC', () => {
			this.pauseMusic();
		});
		this.playMusic();
	}

	componentWillUnmount() {
		PubSub.unsubscribe('PLAY_MUSIC');
	}

	playMusic(item){
		$("#player").jPlayer("setMedia", {
						mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.mp3'
					}).jPlayer('play');
	}

	pauseMusic(){
		$("#player").jPlayer('pause');	
	}

	render() {
		return (
				<div className="home">
					<h1>music jinux</h1>
					<div id="player"></div>
					<ul>
						<li><Link to="/">听歌</Link></li>
						<li><Link to="/page2">直播</Link></li>
						<li><Link to="/page3">K歌</Link></li>
					</ul>
					<Route path="/" component={RadioPage} />
					<Route path="/page2" component={Page2} />
					<Route path="/page3" component={Page3} />
				</div>
		);
	}
}
