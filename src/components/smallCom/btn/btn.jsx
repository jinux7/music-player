import React ,{ Component } from 'react';
import './btn.less'
export default class Btn extends Component {
	constructor(props){
		super(props);
		this.state = {
			btnStyle:{
				'background': this.props.color || '#24a6f3',
			}
		}
	}

	componentDidMount(){
		console.log('btn component did');
	}

	click(a){
		//alert('点击了一下按钮！');
		console.dir(a.target);
	}

	render(){ 

		return (
			<button ref='btn' className='btn' style={this.state.btnStyle} onClick={this.click}>click</button>
		)
	}
}