import { combineReducers } from 'redux';
import create from './create';
import get from './get';
import quiz from './quiz';

export default combineReducers({ create, get, quiz });
