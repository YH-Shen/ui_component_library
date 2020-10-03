import React from "react";
import { scopedClassMaker } from "../classes";

const sc = scopedClassMaker("syhui-layout");

const Content: React.FunctionComponent = () => {
    return <div className={sc("content")}>Content</div>;
};

export default Content;
