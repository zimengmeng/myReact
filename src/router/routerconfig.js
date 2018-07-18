
import { LoadAsyncCom, Loading } from '../tools/loadAsync'
// import Shouye from '../components/tab/shouye'
// import Detail from '../components/tab/detail'
// import Submit from '../components/tab/submit'
// import Sum from '../components/tab/sum'
// import User from '../components/user'
// import Layout from '../components/layout/index'
// let layout = import('../components/layout');//webpack提供的import方法，该方法能够异步加载组件，返回一个promise势力。
//用高阶组件封装


export const config = [

    {
        path: "/user",
        component: LoadAsyncCom(() => import('../components/user'), Loading),
    },
    {
        path: '/layout',
        component: LoadAsyncCom(() => import('../components/layout'), Loading),
        // component: Layout,
        children: [
            {
                path: "/shouye",
                component: LoadAsyncCom(() => import('../components/tab/shouye'), Loading),
            },
            {
                path: "/detail",
                component: LoadAsyncCom(() => import('../components/tab/detail'), Loading),
            },
            {
                path: "/submit",
                component: LoadAsyncCom(() => import('../components/tab/submit'), Loading),
            },
            {
                path: "/sum",
                component: LoadAsyncCom(() => import('../components/tab/sum'), Loading),
            }
        ]
    }
]