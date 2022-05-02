import React, { useState } from 'react';
import styles from './Search.module.scss';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

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

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <SearchIcon />
      <TextField
        onChange={handleSearch}
        inputProps={{
          autoComplete: 'off',
        }}
        label="Search for a word"
        variant="standard"
      />
    </form>
  );
};
