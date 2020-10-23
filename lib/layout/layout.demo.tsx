import React, { Fragment } from "react";
import Demo from "../../demo";
import LayoutExample1 from "./layout.example.1";
import "./layout.demo.scss";

const LayoutDemo = () => {
    return (
        <Fragment>
            <h2>Layout</h2>
            <p>
                Layout components for scaffolding basic structure of the page:
            </p>
            <p>
                <code className="little-code">&lt;Layout&gt;</code>: wrapper
                container. When nested with a{" "}
                <code className="little-code">&lt;Header&gt;</code> or{" "}
                <code className="little-code">&lt;Footer&gt;</code>, all its
                child elements will be vertically arranged, except for
                <code className="little-code">&lt;Aside&gt;</code>.
            </p>
            <p>
                <code className="little-code">&lt;Header&gt;</code>: container
                for headers.
            </p>
            <p>
                <code className="little-code">&lt;Aside&gt;</code>: container
                for side sections (usually a side nav). Will be horrizonally
                placed to any sibling layout component.
            </p>
            <p>
                <code className="little-code">&lt;Content&gt;</code>: container
                for main sections.
            </p>
            <p>
                <code className="little-code">&lt;Footer&gt;</code>: container
                for footers.
            </p>
            <h3>Common layouts</h3>
            <Demo code={require("!!raw-loader!./layout.example.1.tsx").default}>
                <LayoutExample1 />
            </Demo>
        </Fragment>
    );
};
export default LayoutDemo;
