import React, { Component } from 'react';

class Main extends Component {
    render() {
        let navTogglerClasses = ["kx-page__overlay"]

        if (this.props.page.sidenav.isActive) {
            navTogglerClasses.push('kx-is-active kx-is-animating');
        }

        return (
            <div className="kx-page__main">
                <main className="kx-main" role="main">
                    <button className={navTogglerClasses.join(' ')} onClick={() => this.props.toggleSideNav()}>
                        <span className="kx-is-vishidden">Close</span>
                    </button>
                    <div className="kx-page__content">
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
}

export default Main;