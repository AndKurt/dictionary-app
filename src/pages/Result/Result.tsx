import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { License, Loader, Meanings, Phonetics, SourceUrls } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getWordAsync } from '../../redux/actions/actions';
import styles from './Result.module.scss';

interface IResultPage {
  isResultPage?: boolean;
}

export const Result = ({ isResultPage }: IResultPage) => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const { word } = useParams();
  const { isLoading, isError, apiData } = useAppSelector((state) => state.wordReducer);

  useEffect(() => {
    if (isError) {
      navigation('/404');
    }
  }, [navigation, isError]);

  useEffect(() => {
    if (word) {
      dispatch(getWordAsync(word));
    }
  }, [word, dispatch]);

  return (
    <main className={styles.result}>
      <h2>Results</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.helper}>
          {apiData &&
            apiData.map(({ word, phonetic, license, sourceUrls, meanings, phonetics }, index) => {
              return (
                <div key={`${index}-${word}-base`}>
                  <div className={styles.wordBase}>
                    <h3>{word}</h3>
                    {phonetic && <p>[{phonetic}]</p>}
                  </div>
                  <Phonetics phonetics={phonetics} />
                  <License name={license.name} url={license.url} />
                  {sourceUrls && <SourceUrls sourceUrls={sourceUrls} />}
                  {isResultPage && <Meanings meanings={meanings} />}
                </div>
              );
            })}
        </div>
      )}
    </main>
  );
};
