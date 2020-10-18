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
            <div>
                <Button level="default" plain>
                    Default
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
            <div>
                <Button level="default" round>
                    Default
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
        </Fragment>
    );
};

export default ButtonExample1;
