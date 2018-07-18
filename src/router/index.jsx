import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { config } from './routerconfig';

export default class RootRouter extends Component {
    render() {
        return (<div>
            <Switch>
                {
                    config.map((item, index) => {
                        return <Route key={index} path={item.path} render={({ match }) => {
                            let Transion = item.component;
                            return <Transion child={item.children} match={match}> </Transion>
                        }}>

                        </Route>
                    })
                }
                <Redirect from="/" to="/layout/shouye" />
            </Switch>

        </div>
        )
    }
}