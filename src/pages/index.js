import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import CodeHighLight from '../components/CodeHighlight';
import DatePicker from 'react-google-flight-datepicker';

const demoCode = `import DatePicker from 'react-google-flight-datepicker';

<DatePicker
  startDate={new Date()}
  endDate={new Date()}
  onChange={({startDate, endDate}) => onDateChange(startDate, endDate)}
  monthFormat="MMM YYYY"
  dateRenderer={date => date.getDate()}
  weekFormat="DDD"
/>`;

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <DatePicker text="date picker" />
        </div>
      </header>
      <main>

        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={classnames('col col--4')}>
                Desktop version
              </div>
              <div className={classnames('col col--8')}>
                Videos
              </div>
            </div>
            <div className="row">
              <div className={classnames('col col--4')}>
                Mobile version
              </div>
              <div className={classnames('col col--8')}>
                Videos
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div class="container">
            <div className="row">
              <div className="col col--12">
                <h2>Introduction</h2>

                <h2>Installation</h2>
                <CodeHighLight language="code">
                  npm install react-google-flight-datepicker
                </CodeHighLight>
                <br />

                <h2>Usage</h2>
                <CodeHighLight language="jsx">{demoCode}</CodeHighLight>
                <br/>

                <h2>Props</h2>
                <b>startDate</b>
                <p>Describe start date</p>
                <b>endDate</b>
                <p>Describe start date</p>
                <b>endDate</b>
                <p>Describe start date</p>
                <b>endDate</b>
                <p>Describe start date</p>
                <b>endDate</b>
                <p>Describe start date</p>
                <b>endDate</b>
                <p>Describe start date</p>

                <h2>Author</h2>
                David Tran
                <br/>
                Leo Phan
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
