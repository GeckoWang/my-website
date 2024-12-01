import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.container}>
        <div className={styles.introSection}>
          <h1 className={styles.title}>Welcome to my profile!</h1>
          <p className={styles.subtitle}>
            I am Wang Junqiao「王隽乔」, a recent graduate in Precision Medicine and Public Health. 
            My research experience spans interdisciplinary fields, including pharmacology, 
            photodynamic therapy, molecular modeling, and data-driven analysis. 
            </p>
          <p className={styles.subtitle}>
            I am currently seeking a position in leveraging AI to tackle complex biological 
            data challenges, especially in protein and glycoprotein analysis.
          </p>
          <p className={styles.subtitle}></p>
        </div>
      </div>
    </header>
  );
}

function HomepageFeaturestwo() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            <div className={styles.featureCard}>
              <h2>Education</h2>
              <div className={styles.educationItem}>
                <h3>Master of Precision Medicine and Public Health, 2021-2024</h3>
                <p>Tsinghua University</p>
              </div>
              <div className={styles.educationItem}>
                <h3>Bachelor of Clinical Pharmacy, 2016-2021</h3>
                <p>Dalian Medical University</p>
              </div>
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div className={styles.featureCard}>
              <h2>Interests</h2>
              <h3>AI for Healthcare</h3>
              <h3>Computational Biology</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeaturestwo />
      </main>
    </Layout>
  );
}
