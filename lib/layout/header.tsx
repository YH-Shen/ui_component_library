import React from "react";
import { scopedClassMaker } from "../classes";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = scopedClassMaker("syhui-layout");

const Header: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props;

    return (
        <div className={sc("header", { extra: className })} {...rest}>
            Header
        </div>
    );
};

export default Header;
