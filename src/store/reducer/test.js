import { Test_ADD, Test_DIS } from '../action/test'
let typeFn = {
    [Test_ADD](state, action) {
        state.num += 1;
    },
    [Test_DIS](state, action) {
        state.num -= 1;
    }
}

let test = (state = { num: 0 }, action) => {
    typeFn[action.type] && typeFn[action.type](state, action);
    return { ...state };
}
export { test }