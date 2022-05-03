import React, { useState } from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../assets/svg/search.svg';
import CloseIcon from '../../assets/svg/close.svg';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const PLACEHOLDER = 'Type a word...';

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
        placeholder={PLACEHOLDER}
        autoComplete="off"
      />
      <img
        onClick={handleClear}
        className={clsx(styles.closeIcon, word && styles.active)}
        src={CloseIcon}
        alt="close"
      />
    </form>
  );
};
