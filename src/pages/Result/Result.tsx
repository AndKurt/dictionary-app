import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { License, Loader, Phonetics, SourceUrls } from '../../components';
import { useAppSelector } from '../../redux/hooks/hooks';
import styles from './Result.module.scss';

export const Result = () => {
  const navigation = useNavigate();
  const { isLoading, isError, apiData } = useAppSelector((state) => state.wordReducer);

  useEffect(() => {
    if (isError) {
      navigation('/404');
    }
  }, [navigation, isError, apiData]);

  return (
    <main className={styles.result}>
      <h2>Results</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.helper}>
          {apiData &&
            apiData.map((item, index) => {
              return (
                <div key={`${index}-${item.word}-base`}>
                  <div className={styles.wordBase}>
                    <h3>{item.word}</h3>
                    {item.phonetic && <p>[{item.phonetic}]</p>}
                  </div>
                  <Phonetics phonetics={item.phonetics} />
                  <License name={item.license.name} url={item.license.url} />
                  {item.sourceUrls && <SourceUrls sourceUrls={item.sourceUrls} />}
                </div>
              );
            })}
        </div>
      )}
    </main>
  );
};
