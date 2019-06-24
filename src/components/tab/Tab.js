import React, { Component } from "react";
import PropTypes from 'prop-types';

export const Tab = (props) => {
    let classNames = ['kx-tabs__item'];

    if (props.isActive) {
        classNames.push('kx-is-active');
    }
    
    return (
        <li className={classNames.join(' ')}>
            <a className="kx-tabs__label">
                <span className="kx-tabs__txt">{props.name}</span>
            </a>
        </li>
    )
}

Tab.propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool 
}

export default Tab;