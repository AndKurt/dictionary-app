import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IApiWordRequest } from '../../interfaces';

export const getWordAsync = createAsyncThunk('cards/getCards', async (word: string, thunkApi) => {
  try {
    const response = await axios.get<IApiWordRequest>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue('Nothing found');
  }
});
