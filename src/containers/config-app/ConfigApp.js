import React, { Component, Fragment } from 'react';
import MenuBar from '../../components/menu-bar/MenuBar';
import Tabs from '../../components/tabs/Tabs';

import { connect } from 'react-redux';
import { newOperation } from '../../actions/new-operation'

class ConfigApp extends Component {
    render() {
        return (
            <Fragment>
                <MenuBar>
                    <div className="kx-col">
                        {/* TABS Component */}
                        <Tabs> </Tabs>
                    </div>
                    <div className="kx-col">
                    </div>
                </MenuBar>
                <header className="kx-app__header">
                    <h1 className="kx-app__title">Dashboard Title</h1>
                </header>
                <div className="kx-container">
                    <div className="kx-row kx-row--gutters kx-align-items-stretch">
                        <div className="kx-col kx-col--12">
                            <div className="kx-card kx-card--skin-default">
                                test
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    currentOperation: state.operation.currentOperation
  })
export default connect(mapStateToProps, { newOperation })(ConfigApp);