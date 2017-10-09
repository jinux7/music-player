import React, { Component } from 'react';
import './playerPanelBottom.less'
import album from '../../../images/zhaolei.png';
import ProcessBar from '../processBar/processBar.jsx';
let PubSub = require('pubsub-js'); //事件触发module

export default class PlayerPanelBottom extends Component {
	constructor(props){
		super(props);
		this.state = {
			playMark: 'play'
		}
		this.playBtn = this.playBtn.bind(this); 
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
			//PubSub.publish('PLAY_MUSIC');
		}else {
			this.setState({
				playMark: 'pause'
			});
			$("#player").jPlayer('pause');
			//PubSub.publish('PAUSE_MUSIC');
		}
	}

	render(){
		return (
			<div className="playerPanelBottom">
				<img className="zhuan" src={album} alt="专辑照片"/>
				<div className="wrap">
					<div className="processBarWrap">
						<ProcessBar percent="30%" />
					</div>
					<div className="songInfo">
						<h5>
							<strong>成都</strong>
							<span>赵雷</span>
						</h5>
						<h6>
							<span className="fa fa-play" onClick={ this.playBtn } ></span>
						</h6>
					</div>
				</div>
			</div>
		)
	}
}