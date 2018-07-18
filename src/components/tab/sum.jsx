import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleMoneyDispatch } from '../../store/action/allmoney';
import Summ from './summ';

class Sum extends Component {
    render() {
        let { totalMoney } = this.props;
        return <div>
            <h1>总金额：{totalMoney}</h1>
            <Summ></Summ>
        </div>
    }
    componentDidMount() {
        this.props.getTotalMoney();
    }
}

let mapState = (state) => {
    let { totalMoney } = state.singlemoney;
    return { totalMoney }
}
let mapDispatch = (dispatch) => {
    return {
        getTotalMoney() {
            dispatch(getSingleMoneyDispatch);
        }
    }
}
Sum = connect(mapState, mapDispatch)(Sum)
export default Sum;

