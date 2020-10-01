import * as React from "react";
import { Fragment } from "react";

import { Icon } from "../index";
import { scopedClassMaker } from "../classes";
import "./dialog.scss";
interface Props {
    visible: boolean;
}

const scopedClass = scopedClassMaker("syhui-dialog");
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
    return props.visible ? (
        <Fragment>
            <div className={sc("mask")}></div>
            <div className={sc()}>
                <div className={sc("close")}>
                    <Icon name="close" />
                </div>
                <header className={sc("header")}>Notification</header>
                <main className={sc("main")}>{props.children}</main>
                <footer className={sc("footer")}>
                    <button>OK</button>
                    <button>Cancel</button>
                </footer>
            </div>
        </Fragment>
    ) : null;
};

export default Dialog;
