import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logo from '../../assets/logo.svg';
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
    <div className={styles.header}>
      <Link onClick={handleClick} to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <h1>Dictionary App</h1>
      <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button>
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};
