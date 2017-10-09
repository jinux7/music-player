import React,{ Component } from 'react';
import './songList.less';
import { store } from '../../store/store.js';
import { newMusic } from '../../store/action.js';
import initalbum from '../../images/zhaolei.png';

export default class SongList extends Component {
	constructor(props){
		super(props);
		this.state = {
			singer: this.props.match.params.singer,
			songs:[],
			albums:[],
			playMark: 'play'
		}
		this.playBtn = this.playBtn.bind(this);
	}

	playBtn(item,album,ev){
		let span = ev.target;
		$(span).animate({opacity: '0'}, 100)
				.animate({opacity: '1'}, 100);
		let nB = $(span).next('b');		
		nB.css({opacity: '1',display: 'block'});
		let bH = nB.offset().top, winH = $(window).height(), playerPanH = $('.playerPanelBottom').height();
		nB.animate({opacity: '0',left:'0',top: winH-bH-playerPanH}, 1000,function(){
					$(this).css({
						opacity: '1',
						top: 0,
						left: 'initial',
						display: 'none'
					});
					
				});
		//redux处理
		item.album = album || initalbum;
		store.dispatch(newMusic(item));
		console.log(item);
	}

	componentWillMount(){
		let _this = this;
		$.ajax({
			url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.search.catalogSug&query='+this.state.singer,
			dataType: 'jsonp',
			success:function(res){
				_this.setState({
					songs: res.song,
					albums: res.album
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
									<span className="fa fa-hand-o-right" onClick={ _this.playBtn.bind(_this,item,_this.state.albums&&_this.state.albums[index]) } ></span>
									<b>已添加播放</b>
								</li>
							)	
						})
					}
				</ul>
			</div>
		)
	}
}