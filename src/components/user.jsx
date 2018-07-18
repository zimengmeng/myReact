import React, { Component } from 'react'

import { Modal } from 'antd-mobile';
import { connect } from 'react-redux'
import { getAllUserDispatch, submitSingleUserDispatch, USERMANGER_ISADD, USERMANGER_ISDEL, USERMANGER_ISEDIT } from '../store/action/usermanger'
import Header from './user/header'
import Lists from './user/list'
import InputUser from './user/input'
import SetUser from './user/setUser'
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            userid: "",
            username: "",
            moneybase: "",
            editVisible: false,
            editUsername: '',
            editUserid: ''
        }
        this.onOk = this.onOk.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.footer = [{
            text: '确定',
            onPress: () => { this.onOk() }
        }, {
            text: '取消',
            onPress: () => { this.onCancel() }
        }]
    }

    render() {
        let { userlist } = this.props;
        let { visible, userid, username, moneybase, editUsername, editVisible, editUserid } = this.state;
        return (
            <div className="user">
                <Header showOrHide={this.showOrHide.bind(this)} />
                <Lists userlist={userlist} editShow={this.editShow.bind(this)}></Lists>
                <InputUser
                    visible={visible}
                    userid={userid}
                    username={username}
                    moneybase={moneybase}
                    showOrHide={this.showOrHide.bind(this)}
                    footer={this.footer}
                    changeUserId={value => this.setState({ userid: value })}
                    changeUserName={value => this.setState({ username: value })}
                    changeUserMoney={value => this.setState({ moneybase: value })}
                />

                <SetUser
                    visible={editVisible}
                    username={editUsername}
                    userid={editUserid}
                    changeUsername={this.editChangeUsername.bind(this)}
                    changeUserid={this.editChangeUserid.bind(this)}
                    closeModal={this.editCloseModal.bind(this)}
                />
            </div >
        )
    }

    onOk() {
        let { userid, username, moneybase } = this.state;
        this.showOrHide(false);
        this.props.addUser({ userid, username, moneybase })
    }

    onCancel() {
        this.showOrHide(false);
    }
    showOrHide(flag) {
        if (!flag) {
            this.setState({
                visible: flag, userid: "", username: "", moneybase: ""
            })
        } else {
            this.setState({ visible: flag })
        }
    }

    editShow(editUserid, editUsername) {
        let editVisible = true;
        this.setState({ editUserid, editUsername, editVisible });
    }
    editChangeUsername(editUsername) {
        console.log(editUsername)
        this.setState({ editUsername })
    }
    editChangeUserid(editUserid) {
        this.setState({ editUserid });
    }
    editCloseModal() {
        this.setState({ editVisible: false });
    }
    componentDidMount() {
        this.props.getAllUsers();
    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps.isAdd === true) {
        //     this.setState({
        //         userid: "", username: "", moneybase: ""
        //     })
        //     Modal.alert('提示', '添加成功', [{ text: '确定', onPress: () => { this.props.resetIsAdd(null) } }])
        // } else if (nextProps.isAdd === false) {
        //     this.setState({
        //         userid: "", username: "", moneybase: ""
        //     })
        //     Modal.alert('提示', '添加失败', [{ text: '确定', onPress: () => { this.props.resetIsAdd(null) } }])
        // }

        if (nextProps.isAdd === true) {
            Modal.alert('提示', '添加成功', [{ text: '确定', onPress: () => { this.props.resetIsAdd(null) } }]);
        } else if (nextProps.isAdd === false) {
            Modal.alert('提示', '添加失败', [{ text: '确定', onPress: () => { this.props.resetIsAdd(null) } }]);
        } else if (nextProps.isDel === true) {
            Modal.alert('提示', '删除成功', [{ text: '确定', onPress: () => { this.props.resetIsDel(null) } }]);
        } else if (nextProps.isDel === false) {
            Modal.alert('提示', '删除失败', [{ text: '确定', onPress: () => { this.props.resetIsDel(null) } }]);
        } else if (nextProps.isEdit === true) {
            Modal.alert('提示', '修改成功', [{ text: '确定', onPress: () => { this.props.resetIsEdit(null) } }]);
        } else if (nextProps.isEdit === false) {
            Modal.alert('提示', '修改失败', [{ text: '确定', onPress: () => { this.props.resetIsEdit(null) } }]);
        }
    }

}

let mapState = (state) => {
    let { userlist, isAdd, isDel, isEdit } = state.usermanger;
    return {
        userlist, isAdd, isDel, isEdit
    }
}
let mapDispatch = (dispatch) => {
    return {
        getAllUsers() {
            dispatch(getAllUserDispatch)
        },
        addUser(data) {
            dispatch(submitSingleUserDispatch(data))
        },
        resetIsAdd(isAdd) {
            dispatch({ type: USERMANGER_ISADD, isAdd })
        },
        resetIsDel(isDel) {
            dispatch({ type: USERMANGER_ISDEL, isDel });
        },
        resetIsEdit(isEdit) {
            dispatch({ type: USERMANGER_ISEDIT, isEdit });
        }
    }
}
User = connect(mapState, mapDispatch)(User)

export default User