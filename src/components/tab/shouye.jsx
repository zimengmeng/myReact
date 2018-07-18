import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';
import { List } from 'antd-mobile';
import { getSingleMoneyDispatch } from '../../store/action/allmoney';
import { connect } from 'react-redux';
class Shouye extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pwd: "",
            flag: false,
            flag1: true,
            userlist: ""
        }
    }

    clickHandle(e) {
        this.setState({
            pwd: e.target.value
        }, () => {
            let newPwd = this.state.pwd;
            if (newPwd === "123") {
                this.setState({
                    flag1: false,
                    flag: true
                })
            }

        })
    }

    componentDidMount() {
        this.props.getSingleMoney();
    }
    chooseUser(userid) {
        this.props.history.push({ pathname: '/layout/detail', state: { userid } });
    }

    render() {
        let { totalMoney, list } = this.props;
        return (
            <div className="shouye">
                <div className="and">
                    <div className="sum">
                        {totalMoney}
                    </div>
                    <p>hi,2221寝室的美女们</p>
                    {
                        this.state.flag && <p className="p"><Link to="/user">管理用户</Link></p>
                    }
                    {
                        this.state.flag1 && <input placeholder="请输入密码" defaultValue={this.state.pwd} onBlur={(ev) => this.clickHandle(ev)} />
                    }
                </div>
                <div className="banner">
                    <WingBlank>
                        <Carousel className="my-carousel"
                            vertical={false}
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite
                        >
                            <div className="v-item">carousel 1</div>
                            <div className="v-item">carousel 2</div>
                            <div className="v-item">carousel 3</div>
                        </Carousel>
                    </WingBlank>
                </div>
                <List className="list">
                    {
                        list && list.map((item, key) => {
                            return <List.Item onClick={this.chooseUser.bind(this, item.userid)} key={key} extra={item.singleMoney}>{item.username}</List.Item>
                        })
                    }
                </List>
            </div>
        )
    }
}

let mapState = (state) => {
    let { list, totalMoney } = state.singlemoney;
    return { list, totalMoney }
}
let mapDispatch = (dispatch) => {
    return {
        getSingleMoney() {
            dispatch(getSingleMoneyDispatch);
        }
    }
}
Shouye = connect(mapState, mapDispatch)(Shouye)
export default Shouye

Shouye.defaultProps = {
    list: [
        { username: '张三', singleMoney: 100 }
    ]
}