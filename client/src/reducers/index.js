import { combineReducers } from 'redux';
import create from './create';
import get from './get';

export default combineReducers({ create, get });
