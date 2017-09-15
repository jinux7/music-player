import React, { Component } from 'react';
import './processBar.less';

export default class ProcessBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			percent: this.props.percent || '0%',
			barColor: this.props.color || '#33A5DD'
		}
	}

	render(){
		return (
			<div className="processBar">
				<h3></h3>
				<h4 style={ {'backgroundColor':this.state.barColor,'width':this.state.percent} }></h4>
			</div>
		)
	}
}