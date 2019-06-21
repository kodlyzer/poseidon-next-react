import React, { Component } from 'react';

class NavItems extends Component {
    render() {
        return (
            <ul className="kx-tree kx-is-root">
                <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={0}>
                    <a href="#" className="kx-tree__link">
                        {/* ICON Component */}
                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                            <svg focusable="false">
                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                            </svg>
                        </i>
                        {/* ICON Component */}
                        <i className="kx-icon kx-icon--size-base">
                            <svg focusable="false">
                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                            </svg>
                        </i>
                        <span className="kx-tree__link__txt">Link level 0</span>
                    </a>
                    <ul className="kx-tree">
                        <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={1}>
                            <a href="#" className="kx-tree__link">
                                {/* ICON Component */}
                                <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                    <svg focusable="false">
                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                    </svg>
                                </i>
                                {/* ICON Component */}
                                <i className="kx-icon kx-icon--size-base">
                                    <svg focusable="false">
                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                    </svg>
                                </i>
                                <span className="kx-tree__link__txt">Link level 1</span>
                            </a>
                            <ul className="kx-tree">
                                <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="kx-tree__item kx-is-node" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="kx-tree__item kx-is-node" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="kx-tree__item kx-is-node" data-treedepth={1}>
                            <a href="#" className="kx-tree__link">
                                {/* ICON Component */}
                                <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                    <svg focusable="false">
                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                    </svg>
                                </i>
                                {/* ICON Component */}
                                <i className="kx-icon kx-icon--size-base">
                                    <svg focusable="false">
                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                    </svg>
                                </i>
                                <span className="kx-tree__link__txt">Link level 1</span>
                            </a>
                            <ul className="kx-tree">
                                <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="kx-tree__item kx-is-node" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="kx-tree__item kx-is-node" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="kx-tree__item kx-is-node" data-treedepth={1}>
                            <a href="#" className="kx-tree__link">
                                {/* ICON Component */}
                                <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                    <svg focusable="false">
                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                    </svg>
                                </i>
                                {/* ICON Component */}
                                <i className="kx-icon kx-icon--size-base">
                                    <svg focusable="false">
                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                    </svg>
                                </i>
                                <span className="kx-tree__link__txt">Link level 1</span>
                            </a>
                            <ul className="kx-tree">
                                <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="kx-tree__item kx-is-node" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="kx-tree__item kx-is-node" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="kx-tree__item kx-is-node" data-treedepth={1}>
                            <a href="#" className="kx-tree__link">
                                {/* ICON Component */}
                                <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                    <svg focusable="false">
                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                    </svg>
                                </i>
                                {/* ICON Component */}
                                <i className="kx-icon kx-icon--size-base">
                                    <svg focusable="false">
                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                    </svg>
                                </i>
                                <span className="kx-tree__link__txt">Link level 1</span>
                            </a>
                            <ul className="kx-tree">
                                <li className="kx-tree__item kx-is-node kx-is-open" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="kx-tree__item kx-is-node" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="kx-tree__item kx-is-node" data-treedepth={2}>
                                    <a href="#" className="kx-tree__link">
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#caret-right" />
                                            </svg>
                                        </i>
                                        {/* ICON Component */}
                                        <i className="kx-icon kx-icon--size-base">
                                            <svg focusable="false">
                                                <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                            </svg>
                                        </i>
                                        <span className="kx-tree__link__txt">Link level 2</span>
                                    </a>
                                    <ul className="kx-tree">
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                {/* ICON Component */}
                                                <i className="kx-icon kx-icon--size-base">
                                                    <svg focusable="false">
                                                        <use xlinkHref="/assets/img/icons/sprites/icons.svg#box" />
                                                    </svg>
                                                </i>
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                        <li className="kx-tree__item kx-is-leaf" data-treedepth={3}>
                                            <a href="#" className="kx-tree__link">
                                                <span className="kx-tree__link__txt">Link level 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}

export default NavItems;