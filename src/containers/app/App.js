import React, { Component } from 'react';
import './App.scss';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Main from '../../components/main/Main';
import ConfigApp from '../config-app/ConfigApp';

import { connect } from 'react-redux';
import { toggleSideNav } from '../../actions/page.action'


class App extends Component {
  render() {
    let pageClasses = ["kx-page"];
    if (this.props.page.sidenav.isActive) {
      pageClasses.push('kx-is-locked');
    }

    return (
      <div className={pageClasses.join(' ')}>
        <div className="kx-page__canvas kx-flex kx-justify-content-start kx-align-items-start">
          <Header page={this.props.page} toggleSideNav={this.props.toggleSideNav}></Header>
          <Nav page={this.props.page}></Nav>
          <Main page={this.props.page} toggleSideNav={this.props.toggleSideNav}>
            <ConfigApp></ConfigApp>
          </Main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page
})
export default connect(mapStateToProps, { toggleSideNav })(App);
