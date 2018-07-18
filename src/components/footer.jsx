import React, { Component } from 'react'
import '../less/index.css'
import { NavLink } from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li><NavLink activeClassName="active" to="/layout/shouye">首页</NavLink></li>
                    <li><NavLink activeClassName="active" to="/layout/detail">详情</NavLink></li>
                    <li><NavLink activeClassName="active" to="/layout/submit">提交</NavLink></li>
                    <li><NavLink activeClassName="active" to="/layout/sum">结算</NavLink></li>
                </ul>
            </div>
        )
    }
}
