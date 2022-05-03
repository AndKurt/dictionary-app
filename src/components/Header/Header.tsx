import React from 'react';
import logo from '../../assets/svg/logo.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { wordSlice } from '../../redux/reducers/wordReducer';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { resetWordState } = wordSlice.actions;

  const handleClick = () => {
    dispatch(resetWordState());
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link onClick={handleClick} to="/">
          <img className={styles.logo} src={logo} alt="logo" />
          Dictionary App
        </Link>
        <Link className={styles.button} onClick={handleClick} to="/">
          Home
        </Link>
      </div>
    </header>
  );
};
