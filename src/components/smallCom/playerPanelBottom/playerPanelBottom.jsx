import React, { Component } from 'react';
import './playerPanelBottom.less'
import album from '../../../images/album.jpg';
import ProcessBar from '../processBar/processBar.jsx';

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
	}

	render(){
		return (
			<div className="playerPanelBottom">
				<img src={album} alt="专辑照片"/>
				<div className="wrap">
					<div className="processBarWrap">
						<ProcessBar percent="30%" />
					</div>
					<div className="songInfo">
						<h5>
							<strong>下雨天</strong>
							<span>南拳妈妈</span>
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