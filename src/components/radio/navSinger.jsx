import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './navSinger.less';
export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			songs:[
				{'singer':'陈奕迅'},
				{'singer':'刘德华'},
				{'singer':'张学友'},
				{'singer':'黎明'},
				{'singer':'郭富城'},
				{'singer':'罗志祥'},
				{'singer':'陶喆'},
				{'singer':'周杰伦'},
				{'singer':'张国荣'},
				{'singer':'薛之谦'},
				{'singer':'朴树'},
				{'singer':'满江'}
			],
		}
	}
	render() {
		let arr = [];
		for(let i=0;i<this.state.songs.length;i++){
			arr.push(<li key={'singer'+i}>
						<Link to={'/songlist/'+this.state.songs[i].singer}>{this.state.songs[i].singer}</Link>
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