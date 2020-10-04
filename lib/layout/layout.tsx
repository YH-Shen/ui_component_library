import React, { ReactElement } from "react";
import { scopedClassMaker } from "../classes";
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
        children.length &&
        children.reduce(
            (result, node) => result || node.type === Aside,
            false
        );

    return (
        <div
            className={sc("", {
                extra: [className, hasAside && "hasAside"].join(" "),
            })}
            {...rest}
        >
            {props.children}
        </div>
    );
};

export default Layout;
