import React, { Fragment } from "react";
import Button from "../button/button";

const ButtonExample3: React.FunctionComponent = () => {
    return (
        <Fragment>
            <div className="demo-button-row">
                
                {/* Text Buttons=================================== */}
                <Button level="text">Text Button</Button>
                <Button level="text" disabled>Disabled Text Button</Button>

            </div>
        </Fragment>
    );
};

export default ButtonExample3;
