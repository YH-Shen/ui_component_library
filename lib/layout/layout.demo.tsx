import React, { Fragment } from "react";

import Content from "./content";
import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";
import "./layout.example.scss";

const LayoutDemo = () => {
    return (
        <Fragment>
            <h2>Layout</h2>
            <p>
                Layout components for scaffolding basic structure of the page:
            </p>
            <h3>Common layouts</h3>
            <p>Just assign the icon name to the "name" attribute.</p>
            <div>
                <div>
                    <h1>Example 1</h1>
                    <Layout style={{ height: 500, width: 500 }}>
                        <Header className="x">feader</Header>
                        <Content className="y">content</Content>
                        <Footer className="x">footer</Footer>
                    </Layout>
                </div>
            </div>
            <div>
                <div>
                    <h1>Example 2</h1>
                    <Layout style={{ height: 500, width: 500 }}>
                        <Header className="x">header</Header>
                        <Layout>
                            <Aside className="z">aside</Aside>
                            <Content className="y">content</Content>
                        </Layout>
                        <Footer className="x">footer</Footer>
                    </Layout>
                </div>
            </div>
            <div>
                <div>
                    <h1>Example 3</h1>
                    <Layout style={{ height: 500, width: 500 }}>
                        <Header className="x">header</Header>
                        <Layout>
                            <Content className="y">content</Content>
                            <Aside className="z">aside</Aside>
                        </Layout>
                        <Footer className="x">footer</Footer>
                    </Layout>
                </div>
            </div>
            <div>
                <div>
                    <h1>Example 4</h1>
                    <Layout style={{ height: 500, width: 500 }}>
                        <Aside className="z">aside</Aside>
                        <Layout>
                            <Header className="x">header</Header>
                            <Content className="y">content</Content>
                            <Footer className="x">footer</Footer>
                        </Layout>
                    </Layout>
                </div>
            </div>
        </Fragment>
    );
};
export default LayoutDemo;
