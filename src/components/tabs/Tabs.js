import React, { Component } from "react";
import { Tab } from "../tab/Tab";

class Tabs extends Component {
    render() {
        return (
            <nav className="kx-tabs">
                <ol className="kx-tabs__list">
                    <Tab name="Test" isActive={true}></Tab>
                </ol>
            </nav>
        );
    }
}

export default Tabs;