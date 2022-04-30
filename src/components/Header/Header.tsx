import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/result">Result</Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};
