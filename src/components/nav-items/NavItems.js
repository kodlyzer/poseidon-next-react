import React, { Component } from 'react';
import KxIcon from '../kx-icon/KxIcon'

class NavItems extends Component {
    render() {
        return (
            <ul className="kx-tree kx-is-root">
                <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={0}>
                    <a href="#" className="kx-tree__link">
                        <KxIcon icon="caret-right"></KxIcon>
                        <KxIcon icon="box"></KxIcon>
                        <span className="kx-tree__link__txt">Link level 0</span>
                    </a>
                </li>
                { this.props.children }
            </ul>
        )
    }
}

export default NavItems;