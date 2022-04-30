import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <h1>Eror 404</h1>
      <p>
        This page doesn<span>&#39;</span>t exist. Go to <Link to="/">Home</Link>
      </p>
    </main>
  );
};
