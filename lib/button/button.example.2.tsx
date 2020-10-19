import React, { Fragment } from "react";
import Button from "../button/button";

const ButtonExample2: React.FunctionComponent = () => {
    return (
        <Fragment>
            {/* Default Buttons==================================== */}
            <div className="demo-button-row">
                <Button level="default">Default</Button>
                <Button level="primary">Primary</Button>
                <Button level="success">Success</Button>
                <Button level="info">Info</Button>
                <Button level="warning">Warning</Button>
                <Button level="danger">Danger</Button>
            </div>

            {/* Plain Buttons==================================== */}
            <div className="demo-button-row">
                <Button level="default" plain>
                    Plain
                </Button>
                <Button level="primary" plain>
                    Primary
                </Button>
                <Button level="success" plain>
                    Success
                </Button>
                <Button level="info" plain>
                    Info
                </Button>
                <Button level="warning" plain>
                    Warning
                </Button>
                <Button level="danger" plain>
                    Danger
                </Button>
            </div>

            {/* Round Buttons==================================== */}
            <div className="demo-button-row">
                <Button level="default" round>
                    Round
                </Button>
                <Button level="primary" round>
                    Primary
                </Button>
                <Button level="success" round>
                    Success
                </Button>
                <Button level="info" round>
                    Info
                </Button>
                <Button level="warning" round>
                    Warning
                </Button>
                <Button level="danger" round>
                    Danger
                </Button>
            </div>

            {/* Circle Icon Buttons==================================== */}
            <div className="demo-button-row">
                <Button level="default" icon="search" circle />
                <Button level="primary" icon="edit" circle />
                <Button level="success" icon="check" circle />
                <Button level="info" icon="message" circle />
                <Button level="warning" icon="star" circle />
                <Button level="danger" icon="delete" circle />
            </div>
        </Fragment>
    );
};

export default ButtonExample2;
