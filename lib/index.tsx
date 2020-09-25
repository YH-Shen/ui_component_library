import React from "react";
import ReactDOM from "react-dom";

// import Button from "./button";
import Icon from "./icon";

const boo = () => {
    console.log("boo");
};
ReactDOM.render(
    <div>
        <Icon name="twitter" onClick={boo} />
        {/* <Icon name="facebook" />
        <Icon name="wechat" /> */}
    </div>,
    document.querySelector("#root")
);
