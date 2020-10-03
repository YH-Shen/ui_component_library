import React from "react";
import { scopedClassMaker } from "../classes";

const sc = scopedClassMaker("syhui-layout");

const Aside: React.FunctionComponent = () => {
    return <div className={sc("aside")}>Aside</div>;
};

export default Aside;
