import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { getWord } from '../../redux/actions/actions';

export const Search = () => {
  const [word, setWord] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { isError, apiData } = useAppSelector((state) => state.wordReducer);

  useEffect(() => {
    if (!isError && apiData !== null) {
      navigation('/result');
    }
    if (isError) {
      navigation('/404');
    }
  }, [navigation, isError, apiData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(getWord(word));
    event.preventDefault();
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
