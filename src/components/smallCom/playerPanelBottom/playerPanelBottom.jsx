import React, { Component } from 'react';
import './playerPanelBottom.less'
import ProcessBar from '../processBar/processBar.jsx';
import { store } from '../../../store/store.js';
let PubSub = require('pubsub-js'); //事件触发module

export default class PlayerPanelBottom extends Component {
	constructor(props){
		super(props);
		this.state = {
			playMark: 'play',
			info: store.getState()
		}
		this.playBtn = this.playBtn.bind(this); 
		console.log(this.state.info);
	}

	componentDidMount(){
		store.subscribe(()=>{
			this.setState({
				info: store.getState()
			});
		});
	}

	playBtn(ev){
		//this.state.playMark === 'play' ? this.setState({playMark: 'pause'}) : this.setState({playMark: 'play'});
		if(ev.target.className === 'fa fa-play') {
			ev.target.className = 'fa fa-pause';
		}else {
			ev.target.className = 'fa fa-play';
		}

		if(this.state.playMark === 'pause') {
			this.setState({
				playMark: 'play'
			});
			$("#player").jPlayer('play');
			this.refs.albumImg.className = 'zhuan';
			//PubSub.publish('PLAY_MUSIC');
		}else {
			this.setState({
				playMark: 'pause'
			});
			$("#player").jPlayer('pause');
			this.refs.albumImg.className = '';
			//PubSub.publish('PAUSE_MUSIC');
		}
	}

	render(){
		return (
			<div className="playerPanelBottom">
				<img className="zhuan" src={ this.state.info.album.artistpic || this.state.info.album } ref="albumImg" alt="专辑照片"/>
				<div className="wrap">
					<div className="processBarWrap">
						<ProcessBar percent="30%" />
					</div>
					<div className="songInfo">
						<h5>
							<strong>{ this.state.info.songname}</strong>
							<span>{ this.state.info.artistname}</span>
						</h5>
						<h6>
							<span className="fa fa-pause" onClick={ this.playBtn } ></span>
						</h6>
					</div>
				</div>
			</div>
		)
	}
}