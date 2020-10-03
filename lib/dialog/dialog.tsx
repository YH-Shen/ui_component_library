import * as React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";

import { Icon } from "../index";
import { scopedClassMaker } from "../classes";
import "./dialog.scss";
// import Button from "lib/button";
interface Props {
    visible: boolean;
    buttons?: Array<React.ReactElement>;
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
                {props.buttons && (
                    <footer className={sc("footer")}>
                        {props.buttons &&
                            props.buttons.length > 0 &&
                            props.buttons.map((button, index) =>
                                React.cloneElement(button, {
                                    key: index,
                                })
                            )}
                    </footer>
                )}
            </div>
        </Fragment>
    ) : null;
    return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
    onClickMaskClose: false,
};
const modal = (
    content: React.ReactNode,
    buttons?: Array<React.ReactElement>,
    afterClose?: () => void
) => {
    // onClose
    const onClose = () => {
        ReactDOM.render(
            React.cloneElement(component, { visible: false }),
            div
        );
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };

    // Component
    const component = (
        <Dialog
            visible={true}
            onClose={() => {
                onClose();
                afterClose && afterClose();
            }}
            buttons={buttons}
        >
            {content}
        </Dialog>
    );

    // render
    const div = document.createElement("div");
    document.body.append(div);
    ReactDOM.render(component, div);
    return onClose;
};

const alert = (content: string) => {
    const button = <button onClick={() => close()}>OK</button>;
    const close = modal(content, [button]);
};

const confirm = (
    content: string,
    yes?: () => void,
    no?: () => void
) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };

    // onClose={onNo}
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>,
    ];
    const close = modal(content, buttons, no);
};

export { alert, confirm, modal };

export default Dialog;
