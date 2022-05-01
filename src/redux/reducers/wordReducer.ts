import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApiWordRequest } from '../../interfaces';
import { getWord } from '../actions/actions';

interface IWordState {
  apiData: IApiWordRequest[] | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IWordState = {
  apiData: null,
  isLoading: false,
  isError: false,
};

//const initialState: IWordState = {
//  apiData: [
//    {
//      word: '',
//      phonetic: '',
//      phonetics: [
//        {
//          text: '',
//          audio: '',
//          sourceUrl: '',
//          license: {
//            name: '',
//            url: '',
//          },
//        },
//      ],
//      origin: '',
//      meanings: [
//        {
//          partOfSpeech: '',
//          definitions: [
//            {
//              definition: '',
//              example: '',
//              synonyms: [],
//              antonyms: [],
//            },
//          ],
//        },
//        {
//          partOfSpeech: '',
//          definitions: [
//            {
//              definition: '',
//              example: '',
//              synonyms: [],
//              antonyms: [],
//            },
//          ],
//        },
//        {
//          partOfSpeech: '',
//          definitions: [
//            {
//              definition: '',
//              example: '',
//              synonyms: [],
//              antonyms: [],
//            },
//          ],
//        },
//      ],
//    },
//  ],
//  isLoading: false,
//  isError: false,
//};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    resetWordState(state) {
      state.apiData = null;
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getWord.pending.type]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getWord.fulfilled.type]: (state, action: PayloadAction<IApiWordRequest[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.apiData = action.payload;
    },
    [getWord.rejected.type]: (state) => {
      state.isLoading = false;
      state.apiData = null;
      state.isError = true;
    },
  },
});

export const wordReducer = wordSlice.reducer;
