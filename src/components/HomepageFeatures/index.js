import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'For Users',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <div className={styles.buttons}>
            <Link
              to="/docs/use/solutions/intro">
              Products&Solutions
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="https://sinohope.com">
              BOOK DEMO
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/docs/use/user-guide/SUMMARY">
              User Guide
            </Link>
          </div>
      </>
    ),
  },
  {
    title: 'For Learners',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            to="/blog">
            Blog
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            to="/docs/learn/news/intro">
            News
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            to="https://space.bilibili.com/3493266041342842/channel/series">
            新火公开课
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'For Developers',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       <div className={styles.buttons}>
            <Link
              to="/docs/develop/get-started/intro">
              Get Started
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/docs/develop/get-started/intro">
              OpenLoop API
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/docs/develop/mpc-waas-api/intro">
              MPC WaaS API
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/docs/develop/full-custody-waas-api/intro">
              Full Custody WaaS API
            </Link>
          </div>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
