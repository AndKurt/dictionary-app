import React from 'react';
import { Search } from '../../components';
import styles from './Home.module.scss';

export const Home = () => (
  <main className={styles.home}>
    <Search />
  </main>
);
