import React, { Component } from 'react'
import '../../less/index.css'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/layout/shouye"><span>&lt;</span></Link>
                <span>用户管理</span>
                <span onClick={() => { this.props.showOrHide(true) }}>+</span>
            </div>
        )
    }
}
