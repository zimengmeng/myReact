import React, { Component } from 'react'
import '../less/index.css'
import RootRouter from "../router/index.jsx"
export default class Section extends Component {
    render() {
        return (
            <div className="section">
                <RootRouter></RootRouter>
            </div>
        )
    }
}
