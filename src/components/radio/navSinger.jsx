import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './navSinger.less';
import singerData from '../../mock/singerNav.js';
export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			songs:singerData,
		}
	}

	componentDidMount(){
		setTimeout(function(){
			let winH = $(window).height(), 
				panelH = $('.playerPanelBottom').height(), 
				ulH = $('#player').next().height(),
				logoH = $('.home>h1').height();
			$('.navSinger').height(winH-panelH-ulH-logoH);
			console.log(winH,panelH,ulH);
		},500);
	}

	render() {
		let arr = [];
		for(let i=0;i<this.state.songs.length;i++){
			arr.push(<li key={'singer'+i}>
						<Link to={'/songlist/'+this.state.songs[i].singer}>
							<img src={this.state.songs[i].url} alt="歌手图片" />
						</Link>
					</li>);
		}
		return (
			<div className="navSinger">
				<ul>
					{
						arr
					}
				</ul>
			</div>
		);
	}
}