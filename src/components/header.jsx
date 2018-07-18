import React, { Component } from 'react'
import '../less/index.css'
import imgs from '../img/1.png'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href=""><img src={imgs} /></a>
            </div>
        )
    }
}
