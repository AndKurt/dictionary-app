import React from 'react';
import styles from './Search.module.scss';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    console.log(inputValue);
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
