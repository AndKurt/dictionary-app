import React from 'react';
import { Loader, Search } from '../../components';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.home}>
      <Search />
      <Loader />
    </main>
  );
};
