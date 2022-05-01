import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IApiWordRequest } from '../../interfaces';

export const getWord = createAsyncThunk('cards/getCards', async (word: string, thunkApi) => {
  try {
    const response = await axios.get<IApiWordRequest>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue('Nothing found');
  }
});
