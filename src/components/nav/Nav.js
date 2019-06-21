import React, { Component } from 'react';
import NavItems from '../nav-items/NavItems'
import KxIcon from '../kx-icon/KxIcon';

class Nav extends Component {
    render() {
        let navClasses = ["kx-page__nav"];
        if (this.props.page.sidenav.isActive) {
            navClasses.push('kx-is-active');
        } else {
            navClasses.push('kx-is-hidden')
        }

        return (
            <div className={navClasses.join(' ')}>
                <nav className="kx-nav kx-nav--main" aria-labelledby="--24241">
                    <div className="kx-nav__search">
                        <div className="kx-inputgroup">
                            {/* FIELD Component */}
                            <div className="kx-form__element">
                                <input className="kx-field kx-field--size-base" id="--63647" type="search" placeholder="Find component" />
                                <label className="kx-label kx-is-vishidden" htmlFor="--63647">
                                    Find Component
                      </label>
                            </div>
                            {/* BUTTON Component */}
                            <button className="kx-btn kx-btn--skin-primary kx-btn--size-base kx-btn--icon" aria-label="Search">
                                <span className="kx-btn__inner">
                                    {/* ICON Component */}
                                    <KxIcon icon="search"></KxIcon>
                                    <span className="kx-btn__txt kx-is-vishidden">Search</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <h2 className="kx-nav__header kx-is-vishidden" id="--24241">Main Navigation</h2>
                    <NavItems></NavItems>
                </nav>
            </div>
        )
    }
}

export default Nav;