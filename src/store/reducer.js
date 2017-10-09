
import album from '../images/zhaolei.png';
let initData = {
	"artistname":"赵雷",
	"songname":"成都",
	"album": album
};
const changeMusic = (state=initData, action)=>{
	switch(action.type){
		case 'NEW_MUSIC':
		return action.item
		default:
		return state;
	}
}

export { changeMusic }