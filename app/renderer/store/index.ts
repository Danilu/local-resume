import logger from 'redux-logger';
import RcReduxModel from 'rc-redux-model'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import globalModel from './globalModel';

// 调用 RcReduxModel 实例化一下得到最后的 reduxModel
const reduxModel = new RcReduxModel([globalModel]);

// 使用 Redux
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));