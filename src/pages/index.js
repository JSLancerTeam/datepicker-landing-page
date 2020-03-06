import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import CodeHighLight from '../components/CodeHighlight';
import DatePicker from 'react-google-flight-datepicker';
import Props from '../components/Props';

const demoCode = `import DatePicker from 'react-google-flight-datepicker';

<DatePicker
  startDate={new Date()}
  endDate={new Date()}
  onChange={({startDate, endDate}) => onDateChange(startDate, endDate)}
  minDate={new Date(1900, 0, 1)}
  maxDate={new Date(2100, 0, 1)}
  dateFormat="D"
  monthFormat="MMM YYYY"
  startDatePlaceholder="Start Date"
  endDatePlaceholder="End Date"
  disabled={false}
  className="my-own-class-name"
/>`;

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="/img/plane.png" className={styles.heroImage} />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.datepickerContainer}>
            <DatePicker
              startDatePlaceholder="Start Date"
              endDatePlaceholder="End Date"
            />
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={classnames('col col--12')}></div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div class="container">
            <div className="row">
              <div className="col col--12">
                <h2>Installation</h2>
                <CodeHighLight language="code">
                  npm install react-google-flight-datepicker
                </CodeHighLight>
                <br />
                <h2>Usage</h2>
                <CodeHighLight language="jsx">{demoCode}</CodeHighLight>
                <br />
                <h2>Props</h2>
                <Props
                  props={[
                    {
                      name: 'startDate',
                      type: 'Date',
                      defaultValue: 'null',
                      description: 'Selected start date'
                    },
                    {
                      name: 'endDate',
                      type: 'Date',
                      defaultValue: 'null',
                      description: 'Selected end date'
                    },
                    {
                      name: 'dateFormat',
                      type: 'String',
                      defaultValue: 'D',
                      description: (
                        <>
                          Display format for date. Check momentjs doc for
                          information (
                          <a
                            target="_blank"
                            href="https://momentjs.com/docs/#/displaying/"
                          >
                            https://momentjs.com/docs/#/displaying/
                          </a>
                          )
                        </>
                      )
                    },
                    {
                      name: 'monthFormat',
                      type: 'String',
                      defaultValue: 'MMM YYYY',
                      description: (
                        <>
                          Display format for month. Check momentjs doc for
                          information (
                          <a
                            target="_blank"
                            href="https://momentjs.com/docs/#/displaying/"
                          >
                            https://momentjs.com/docs/#/displaying/
                          </a>
                          )
                        </>
                      )
                    },
                    {
                      name: 'onChange',
                      type: 'Function',
                      defaultValue: 'null',
                      description:
                        'Event handler that is called when startDate or endDate are changed'
                    },
                    {
                      name: 'onFocus',
                      type: 'Function',
                      defaultValue: 'null',
                      description:
                        'Return a string (START_DATE, END_DATE) which indicate which text input is focused'
                    },
                    {
                      name: 'minDate',
                      type: 'Date',
                      defaultValue: '1900 Jan 01',
                      description: 'Minimum date that user can select'
                    },
                    {
                      name: 'maxDate',
                      type: 'Date',
                      defaultValue: '2100 Jan 01',
                      description: 'Maximum date that user can select'
                    },
                    {
                      name: 'className',
                      type: 'String',
                      defaultValue: '',
                      description: 'Custom CSS className for datepicker'
                    },
                    {
                      name: 'disabled',
                      type: 'String',
                      defaultValue: 'false',
                      description: 'Disable the datepicker'
                    },
                    {
                      name: 'startDatePlaceholder',
                      type: 'String',
                      defaultValue: 'Start Date',
                      description: 'Placeholder text for startDate text input'
                    },
                    {
                      name: 'endDatePlaceholder',
                      type: 'String',
                      defaultValue: 'End Date',
                      description: 'Placeholder text for endDate text input'
                    }
                  ]}
                />
                <h2>Author</h2>
                <strong>David Tran</strong>
                <br />
                <a href="https://github.com/davidtran">
                  https://github.com/davidtran
                </a>
                <br />
                <a href="mailto:david@jslancer.com">david@jslancer.com</a>
                <br />
                <br />
                <strong>Leo Phan</strong>
                <br />
                <a href="https://github.com/nhuthuy212507">
                  https://github.com/nhuthuy212507
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
