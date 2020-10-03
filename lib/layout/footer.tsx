import React from "react";
import { scopedClassMaker } from "../classes";

const sc = scopedClassMaker("syhui-layout");

const Footer: React.FunctionComponent = () => {
    return <div className={sc("footer")}>Footer</div>;
};

export default Footer;
