import * as React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";

import { Icon } from "../index";
import { scopedClassMaker } from "../classes";
import "./dialog.scss";
interface Props {
    visible: boolean;
    buttons: Array<React.ReactElement>;
    onClose: React.MouseEventHandler;
    onClickMaskClose?: boolean;
}

const scopedClass = scopedClassMaker("syhui-dialog");
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
    // type safe
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.onClickMaskClose) {
            props.onClose(e);
        }
    };
    const x = props.visible ? (
        <Fragment>
            <div className={sc("mask")} onClick={onClickMask}></div>
            <div className={sc()}>
                <div className={sc("close")} onClick={onClickClose}>
                    <Icon name="close" />
                </div>
                <header className={sc("header")}>Notification</header>
                <main className={sc("main")}>{props.children}</main>
                <footer className={sc("footer")}>
                    {props.buttons.map((button, index) =>
                        React.cloneElement(button, { key: index })
                    )}
                </footer>
            </div>
        </Fragment>
    ) : null;
    return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
    onClickMaskClose: false,
};

export default Dialog;
