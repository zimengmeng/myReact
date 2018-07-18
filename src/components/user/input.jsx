import React, { Component } from 'react'
import { InputItem, Modal, List, Flex } from 'antd-mobile';
export default class InputUser extends Component {
    render() {
        let { visible, footer, userid, username, moneybase, changeUserId, changeUserName, changeUserMoney } = this.props;
        return (
            <Modal
                visible={visible}
                transparent
                maskClosable={true}
                onClose={() => { this.showOrHide(false) }}
                title="创建用户"
                footer={footer}
            >
                <List>
                    <Flex>
                        <Flex.Item>用户名id:</Flex.Item>
                        <Flex.Item>
                            <InputItem value={userid} onChange={value => changeUserId(value)} />
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>姓名:</Flex.Item>
                        <Flex.Item>
                            <InputItem value={username} onChange={value => changeUserName(value)} />
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>金钱基数:</Flex.Item>
                        <Flex.Item>
                            <InputItem value={moneybase} onChange={value => changeUserMoney(value)} />
                        </Flex.Item>
                    </Flex>
                </List>
            </Modal>
        )
    }
}
