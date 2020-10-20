import React from "react";

import  { modal } from "./dialog";
import Button from "../button/button";

const DialogExample2: React.FunctionComponent = () => {
    const openModal = () => {
        const close = modal(
            <h1>
                This is a Modal.
                <Button onClick={() => close()}>close</Button>
            </h1>
        );
    };
    return <Button level="primary" onClick={openModal}>Open Modal</Button>;
        
    
}

export default DialogExample2;

