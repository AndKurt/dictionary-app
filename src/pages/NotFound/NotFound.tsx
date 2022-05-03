import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { wordSlice } from '../../redux/reducers/wordReducer';
import styles from './NotFound.module.scss';
import notFoundImg from '../../assets/png/error.png';

export const NotFound = () => {
  const dispatch = useAppDispatch();
  const { resetWordState } = wordSlice.actions;

  const handleClick = () => {
    dispatch(resetWordState());
  };

  return (
    <main className={styles.notFound}>
      <h4>Oooops...</h4>
      <h3>Something went wrong</h3>
      <div className={styles.imgContainer}>
        <img src={notFoundImg} alt="not-found" />
      </div>
      <p>
        Go to{' '}
        <Link className={styles.link} onClick={handleClick} to="/">
          Home
        </Link>
      </p>
    </main>
  );
};
