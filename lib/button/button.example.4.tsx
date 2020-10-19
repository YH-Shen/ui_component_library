import React, { Fragment } from "react";
import Button from "../button/button";

const ButtonExample4: React.FunctionComponent = () => {
    return (
        <Fragment>
            {/* Icon Buttons==================================== */}
            <div className="demo-button-row">
                <Button level="primary" icon="edit" />
                <Button level="primary" icon="share" />
                <Button level="primary" icon="delete" />
                <Button level="primary" icon="search">Search</Button>
                <Button level="primary" icon="upload" position="right">Upload</Button>
            </div>
        </Fragment>
    );
};

export default ButtonExample4;
