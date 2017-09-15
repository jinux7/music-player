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

	playBtn(){
		this.state.playMark === 'play' ? this.setState({playMark: 'pause'}) : this.setState({playMark: 'play'}) 
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
							<span onClick={ this.playBtn } >{ this.state.playMark }</span>
						</h6>
					</div>
				</div>
			</div>
		)
	}
}