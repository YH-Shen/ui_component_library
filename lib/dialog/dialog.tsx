import * as React from "react";
import { Fragment } from "react";

import "./dialog.scss";

interface Props {
    visible: boolean;
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    return props.visible ? (
        <Fragment>
            <div className="syhui-dialog-mask"></div>
            <div className="syhui-dialog">
                <div className="syhui-dialog-close"></div>
                <header className="syhui-dialog-header">
                    Notification
                </header>
                <main className="syhui-dialog-main">
                    {props.children}
                </main>
                <footer className="syhui-dialog-footer">
                    <button>OK</button>
                    <button>Cancel</button>
                </footer>
            </div>
        </Fragment>
    ) : null;
};

export default Dialog;
