import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { wordSlice } from '../../redux/reducers/wordReducer';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  const dispatch = useAppDispatch();
  const { resetWordState } = wordSlice.actions;

  const handleClick = () => {
    dispatch(resetWordState());
  };
  return (
    <main className={styles.notFound}>
      <h1>Eror 404</h1>
      <p>
        This page doesn<span>&#39;</span>t exist. Go to{' '}
        <Link onClick={handleClick} to="/">
          Home
        </Link>
      </p>
    </main>
  );
};
