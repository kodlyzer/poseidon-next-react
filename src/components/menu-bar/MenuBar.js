import React, { Component } from "react";

const MenuBar = (props) => {
    return (
        <div className="kx-menubar kx-theme--foam">
            <div className="kx-container">
                <div className="kx-row kx-align-items-center">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default MenuBar;