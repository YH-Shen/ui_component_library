import React from "react";

import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";

export default function () {
    return (
        <div>
            <div>Example 1</div>
            <Layout className="hi">
                <Header>feader</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
        </div>
    );
}
