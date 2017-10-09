import {createStore, combineReducers} from 'redux';
import { changeMusic } from './reducer.js'

const store = createStore(changeMusic);
export { store };