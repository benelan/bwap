import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {Navbar, Nav, Button} from 'bootstrap'
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';

import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import  MapPage  from '../MapPage/MapPage';
import NavTop from '../NavTop/NavTop'

import '../MapPage/map.css'; // postCSS import of CSS module
import '../index.css'; // postCSS import of CSS module


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
                <React.Fragment>
                <NavTop />
                
                <div className="container">
                    <div className="col-sm-12">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <PrivateRoute exact path="/map" component={MapPage} />
                            </div>
                        </Router>
                    </div>
                </div>
                </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 