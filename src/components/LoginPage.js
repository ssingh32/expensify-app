import React from 'react';
import {connect} from 'react-redux';
import { startLogin, startGitHubLogin } from '../actions/auth';

export const LoginPage = ({ startLogin, startGitHubLogin }) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1>Expensify App</h1>
                <p>It's time to get your expenses under control.</p>
                <div className="box-layout__button">
                    <button className="button" onClick={startLogin}>Login With Google</button>
                    <button className="button" onClick={startGitHubLogin}>Login With Github</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startGitHubLogin: () => dispatch(startGitHubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);