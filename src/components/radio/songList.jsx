import React,{ Component } from 'react';
import './songList.less';

export default class SongList extends Component {
	constructor(props){
		super(props);
		this.state = {
			singer: this.props.match.params.singer,
			songs:[]
		}
	}
	componentWillMount(){
		let _this = this;
		$.get('http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.search.catalogSug&query='+this.state.singer,function(res){
			console.log(res.song);
			_this.setState({
				songs: res.song
			});
		});
	}
	render(){
		return (
			<div className="songList">
				<ul>
					<h2>{this.state.singer+'->歌曲列表'}</h2>
					{
						this.state.songs.map(function(item,index){
							return (
								<li key={'songList'+index}>
									<strong>{item.songname}</strong>
								</li>
							)	
						})
					}
				</ul>
			</div>
		)
	}
}