import React, { Fragment } from "react";
import Button from "../button/button";

const ButtonExample5: React.FunctionComponent = () => {
    return (
        <Fragment>
            <div className="demo-button-row">
                
                {/* Text Buttons=================================== */}
                <Button level="primary" loading>Text Button</Button>
                <Button level="primary" disabled>Disabled Text Button</Button>

            </div>
        </Fragment>
    );
};

export default ButtonExample5;
