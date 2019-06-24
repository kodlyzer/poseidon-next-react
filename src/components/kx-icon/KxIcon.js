import React from "react";

const KxIcon = (props) => {
    return (
        <i className="kx-icon kx-icon--size-tiny kx-tree__caret">
            <svg focusable="false">
                <use xlinkHref={`/assets/img/icons/sprites/icons.svg#${props.icon}`} />
            </svg>
        </i>
    )
}

export default KxIcon;
