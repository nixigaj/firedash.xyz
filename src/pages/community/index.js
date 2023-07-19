import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Community`}
            description="The Firedash community.">
            <div className="container" style={{marginTop: 20}}>
                <h1>Community</h1>
                <a href="https://forum.firedash.org">Forum</a>
                <p>Matrix coming soon...</p>
            </div>
        </Layout>
    );
}
