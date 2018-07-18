import React, { Component } from 'react'
import '../../less/index.css'
import { List, Flex } from 'antd-mobile';
import { connect } from 'react-redux'
import { Modal } from 'antd-mobile';
import { delUserDispatch } from '../../store/action/usermanger';
class Lists extends Component {
    render() {
        let { userlist } = this.props;
        return (
            <List>
                <List.Item>
                    <Flex className="text-center">
                        <Flex.Item>操作</Flex.Item>
                        <Flex.Item>{'姓名'}</Flex.Item>
                        <Flex.Item>{'用户ID'}</Flex.Item>
                        <Flex.Item>操作</Flex.Item>
                    </Flex>
                </List.Item>
                {
                    userlist && userlist.map((item, key) => {
                        return <List.Item key={key}>
                            <Flex>
                                <Flex.Item onClick={this.itemEditClick.bind(this, item.userid, item.username)}>修改</Flex.Item>
                                <Flex.Item>{item.username}</Flex.Item>
                                <Flex.Item>{item.userid}</Flex.Item>
                                <Flex.Item onClick={this.itemDelClick.bind(this, item.userid)}>删除</Flex.Item>
                            </Flex>
                        </List.Item>
                    })
                }
            </List>
        )
    }

    itemDelClick(userid) {
        Modal.alert('提示', '确认删除吗？', [{
            text: 'OK', onPress: () => {
                this.props.delUser(userid);
            }
        }, { text: 'NO' }]);
    }
    itemEditClick(userid, username) {
        this.props.editShow(userid, username);
    }
}
let mapState = (state) => {
    return {}
}
let mapDispatch = (dispatch) => {
    return {
        delUser(userid) {
            dispatch(delUserDispatch(userid));
        }
    }
}

Lists = connect(mapState, mapDispatch)(Lists)

export default Lists