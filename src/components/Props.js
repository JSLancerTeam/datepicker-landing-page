import React from 'react';
import styles from './Props.module.css';

const Props = ({ props }) => (
  <table className={styles.container}>
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {props.map(prop => (
        <tr key={prop.name}>
          <td>{prop.name}</td>
          <td>{prop.type}</td>
          <td>{prop.defaultValue}</td>
          <td>{prop.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Props;
