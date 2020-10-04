import React from "react";
import { scopedClassMaker } from "../helpers/classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = scopedClassMaker("syhui-layout");

const Header: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props;

    return (
        <div className={sc("header", { extra: className })} {...rest}>
            {props.children}
        </div>
    );
};

export default Header;
