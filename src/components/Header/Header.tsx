import React from 'react';
import logo from '../../assets/logo.svg';
//import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      {/*<Link to="/">*/}
      <img className={styles.logo} src={logo} alt="logo" />
      {/*</Link>*/}
    </div>
  );
};
