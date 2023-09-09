import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Homepage from '@site/src/components/Homepage';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Taking intuitive networking to the next level`}
      description="Taking intuitive networking to the next level">
        <Homepage/>
    </Layout>
  );
}
