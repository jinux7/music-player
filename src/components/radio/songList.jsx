import React,{ Component } from 'react';
import './songList.less';

export default class SongList extends Component {
	constructor(props){
		super(props);
		this.state = {
			singer: this.props.match.params.singer,
			songs:[],
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

	componentWillMount(){
		let _this = this;
		$.ajax({
			url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.search.catalogSug&query='+this.state.singer,
			dataType: 'jsonp',
			success:function(res){
				console.log(res.song);
				_this.setState({
					songs: res.song
				});
			}
		});
		
		/*$.get('http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.search.catalogSug&query='+this.state.singer,function(res){
			console.log(res.song);
			_this.setState({
				songs: res.song
			});
		});*/
	}

	render(){
		let _this = this;
		return (
			<div className="songList">
				<ul>
					<h2>{this.state.singer+'->歌曲列表'}</h2>
					{
						this.state.songs.map(function(item,index){
							return (
								<li key={'songList'+index}>
									<strong>{item.songname}</strong>
									<span className="fa fa-play" onClick={ _this.playBtn } ></span>
								</li>
							)	
						})
					}
				</ul>
			</div>
		)
	}
}