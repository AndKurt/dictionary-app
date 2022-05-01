import React from 'react';
import { Search } from '../../components';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.home}>
      <Search />
    </main>
  );
};
