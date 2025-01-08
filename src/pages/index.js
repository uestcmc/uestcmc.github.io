import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', 'mc')}>
          {siteConfig.title}
        </Heading>
        <h2 className={clsx('hero__subtitle', 'mc')}>电子科技大学 Minecraft 社区</h2>
        
        <img src="/img/logo.png" height="240" width="240" />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="UESTC Minecraft Community"
      wrapperClassName='home'
      >
        <HomepageHeader />
        <main className={styles.main}>
          <HomepageFeatures />
        </main>
    </Layout>
  );
}
