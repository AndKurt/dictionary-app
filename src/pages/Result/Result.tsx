import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MeaningsList, License, Loader, Phonetics, SourceUrls } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getWordAsync } from '../../redux/actions/actions';
import styles from './Result.module.scss';

interface IResultPage {
  isResultPage?: boolean;
}

enum Titles {
  Origin = 'Origin: ',
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
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.helper}>
          {apiData &&
            apiData.map(
              ({ word, phonetic, license, sourceUrls, meanings, phonetics, origin }, index) => {
                return (
                  <div key={`${index}-${word}-base`}>
                    <div className={styles.wordBase}>
                      <h2>{word}</h2>
                      {phonetic && <p className={styles.phoenetic}>[{phonetic}]</p>}
                    </div>
                    {origin && (
                      <div>
                        <h3>
                          {Titles.Origin}
                          {origin}
                        </h3>
                      </div>
                    )}
                    <Phonetics phonetics={phonetics} />
                    <License name={license.name} url={license.url} />
                    {sourceUrls && <SourceUrls sourceUrls={sourceUrls} />}
                    {isResultPage && <MeaningsList meanings={meanings} />}
                  </div>
                );
              }
            )}
        </div>
      )}
    </main>
  );
};
