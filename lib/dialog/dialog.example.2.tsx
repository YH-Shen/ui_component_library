import React, { Fragment } from 'react'

import  { modal } from "./dialog";
import Button from "../button/button";

const DialogExample2: React.FunctionComponent = () => {
   
    const openModal = () => {
        const close = modal(
            <Fragment>
                    <div>
                        This is a Modal Dialog.
                    </div>
                <footer className="syhui-dialog-footer">
                    <Button onClick={() => close()}>close</Button>                
                </footer>
            </Fragment>
        );
    };
   
     
    return <Button level="primary" onClick={openModal}>Open Modal</Button>;
        
    
}

export default DialogExample2;

