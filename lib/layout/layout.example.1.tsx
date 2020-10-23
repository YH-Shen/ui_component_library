import React from "react";

import Content from "./content";
import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";

const LayoutExample1: React.FunctionComponent = () => {
    return (
        <div>
            <div className="layout-demo-example">
                <Layout style={{ height: 300, width: 590 }}>
                    <Header className="demo-header">Header</Header>
                    <Content className="demo-content">Content</Content>
                    <Footer className="demo-header">Footer</Footer>
                </Layout>
            </div>
            <div className="layout-demo-example">
                <Layout style={{ height: 300, width: 590 }}>
                    <Header className="demo-header">Header</Header>
                    <Layout>
                        <Aside className="demo-aside">Aside</Aside>
                        <Content className="demo-content">Content</Content>
                    </Layout>
                    <Footer className="demo-header">footer</Footer>
                </Layout>
            </div>
            <div className="layout-demo-example">
                <Layout style={{ height: 300, width: 590 }}>
                    <Header className="demo-header">Header</Header>
                    <Layout>
                        <Content className="demo-content">Content</Content>
                        <Aside className="demo-aside">Aside</Aside>
                    </Layout>
                    <Footer className="demo-header">Footer</Footer>
                </Layout>
            </div>
            <div className="layout-demo-example">
                <Layout style={{ height: 300, width: 590 }}>
                    <Aside className="demo-aside">Aside</Aside>
                    <Layout>
                        <Header className="demo-header">Header</Header>
                        <Content className="demo-content">Content</Content>
                        <Footer className="demo-header">Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};

export default LayoutExample1;
