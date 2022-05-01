import React from 'react';
import { Loader, Search } from '../../components';
import { useAppSelector } from '../../redux/hooks/hooks';
import styles from './Home.module.scss';

export const Home = () => {
  const { isLoading } = useAppSelector((state) => state.wordReducer);

  return (
    <main className={styles.home}>
      <Search />
      {isLoading && <Loader />}
    </main>
  );
};
