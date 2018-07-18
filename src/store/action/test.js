import { getInitNum } from '../../api/registerApi'
export const Test_ADD = 'Test_ADD'
export const Test_DIS = 'Test_DIS'
export const Test_INIT = 'Test_INIT'
export function getInit(dispatch) {
    getInitNum().then((num) => {
        dispatch({ type: Test_INIT, num });
    })
}