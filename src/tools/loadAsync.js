import React, { Component } from 'react';

export let LoadAsyncCom = (loadAbled, Loading) => {

    return class loadAble extends Component {
        constructor(props) {
            super(props)
            this.state = {
                Load: Loading
            }
        }
        render() {
            // console.log(this.props)
            let { Load } = this.state;
            return <Load {...this.props} />
        }
        componentDidMount() {
            loadAbled().then((com) => {
                this.setState({ Load: com.default })
            })
        }
    }
}

export function Loading() {
    return <div>loding</div>
}

