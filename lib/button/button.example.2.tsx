import React, { Fragment } from "react";
import Button from "../button/button";

const ButtonExample2: React.FunctionComponent = () => {
    return (
        <Fragment>
            {/* Disabled Default Buttons==================================== */}
            <div className="demo-button-row">
                <Button level="default" disabled>Default</Button>
                <Button level="primary" disabled>Primary</Button>
                <Button level="success" disabled>Success</Button>
                <Button level="info" disabled>Info</Button>
                <Button level="warning" disabled>Warning</Button>
                <Button level="danger" disabled>Danger</Button>
            </div>

            {/* Disabled Plain Buttons==================================== */}
            <div className="demo-button-row">
                <Button level="default" plain disabled>Plain</Button>
                <Button level="primary" plain disabled>Primary</Button>
                <Button level="success" plain disabled>Success</Button>
                <Button level="info" plain disabled>Info</Button>
                <Button level="warning" plain disabled>Warning</Button>
                <Button level="danger" plain disabled>Danger</Button>
            </div>

            
        </Fragment>
    );
};

export default ButtonExample2;
