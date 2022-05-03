import React, { useState } from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../assets/search.svg';
import CloseIcon from '../../assets/close.svg';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export const Search = () => {
  const [word, setWord] = useState('');
  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigation(`/result/${word}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setWord(inputValue);
  };

  const handleClear = () => {
    setWord('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <img className={styles.searchIcon} src={searchIcon} alt="search" />
      <input
        onChange={handleSearch}
        type="text"
        name="search"
        id="search"
        value={word}
        placeholder="Type a word..."
        autoComplete="off"
      />
      <img
        onClick={handleClear}
        className={word ? clsx(styles.closeIcon, styles.active) : styles.closeIcon}
        src={CloseIcon}
        alt="close"
      />
    </form>
  );
};
