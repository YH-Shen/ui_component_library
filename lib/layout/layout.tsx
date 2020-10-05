import React, { ReactElement } from "react";
import { scopedClassMaker } from "../helpers/classnames";

import Aside from "./aside";
import "./layout.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    // children: ReactNodeArray | ReactElement;
    children: ReactElement | Array<ReactElement>;
}

const sc = scopedClassMaker("syhui-layout");
const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props;
    const children = props.children as Array<ReactElement>;
    const hasAside =
        "length" in children &&
        children.reduce(
            (result, node) => result || node.type === Aside,
            false
        );

    return (
        <div
            className={sc(
                { "": true, hasAside },
                { extra: className }
            )}
            {...rest}
        >
            {props.children}
        </div>
    );
};

export default Layout;
export { Layout };
export { default as Header } from "./header";
export { default as Content } from "./content";
export { default as Aside } from "./aside";
export { default as Footer } from "./footer";
