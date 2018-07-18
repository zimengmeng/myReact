// import React, { Component } from 'react'

// export default class Detail extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: this.props.location.query.item
//         }
//     }
//     render() {
//         return (
//             <div className="detail">
//                 <ul>
//                     <li><p>用户名</p><span>钱数</span></li>
//                     {this.state.data && <li><p>{this.state.data.username}</p><span>{this.state.data.moneybase}</span></li>}
//                 </ul>
//             </div>
//         )
//     }
// }


import React, { Component } from 'react';
import { List, Flex } from 'antd-mobile';
import '../../less/index.css';
import { connect } from 'react-redux';
import { getSingleLogsDispatch } from '../../store/action/allmoney';

class Detail extends Component {
    render() {
        let { chooseUsername, singleLogs } = this.props;
        return <div className="detail">
            <h1>{chooseUsername}</h1>
            <List>
                {
                    singleLogs && singleLogs.map((item, key) => {
                        return <List.Item key={key}>
                            <Flex>
                                <Flex.Item className="text-center">{item.time}</Flex.Item>
                                <Flex.Item className="text-center">{item.logMoney}</Flex.Item>
                                <Flex.Item className="text-center">{item.dowhat}</Flex.Item>
                            </Flex>


                        </List.Item>
                    })
                }
            </List>


        </div>
    }
    componentDidMount() {
        let userid = this.props.location.state && this.props.location.state.userid;
        this.props.getLogs(userid);
    }
}
Detail.defaultProps = {
    chooseUsername: '张三',
    singleLogs: [
        {
            time: '2018-7-15',
            logMoney: 100,
            dowhat: '买菜'
        }
    ]
}

let mapState = (state) => {
    let { singleLogs, chooseUsername } = state.singlemoney;
    return { singleLogs, chooseUsername }
}
let mapDispatch = (dispatch) => {
    return {
        getLogs(userid) {
            dispatch(getSingleLogsDispatch(userid));
        }
    }
}
Detail = connect(mapState, mapDispatch)(Detail)
export default Detail;
