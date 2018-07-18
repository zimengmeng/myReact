import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import '../../less/index.css'
import { Switch, Route } from 'react-router-dom';
export default class Layout extends Component {
    render() {
        let { child, match } = this.props;
        return (
            <div>
                <Header />
                <Switch>
                    {
                        child && child.map((item, index) => {
                            return <Route key={index} path={match.url + item.path} component={item.component} />
                        })
                    }

                </Switch>
                <Footer />
            </div>
        )
    }
}

Layout.defaultProps = {
    allMoney: 100
}
