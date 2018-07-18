import { combineReducers } from 'redux';
import { test } from './test'
import { singlemoney } from './allmoney'
import { usermanger } from './usermanger'
let reducer = combineReducers({
    test, usermanger, singlemoney
})
export default reducer;