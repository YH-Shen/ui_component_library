import React, { Fragment } from "react";
import Button from "../button/button";

const ButtonExample1: React.FunctionComponent = () => {
    return (
        <Fragment>
            <div>
                <Button level="default">Default</Button>
                <Button level="primary">Primary</Button>
                <Button level="success">Success</Button>
                <Button level="info">Info</Button>
                <Button level="warning">Warning</Button>
                <Button level="danger">Danger</Button>
            </div>
        </Fragment>
    );
};

export default ButtonExample1;
