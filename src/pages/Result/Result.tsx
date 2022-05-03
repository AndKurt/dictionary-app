import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CollapseList, License, Loader, Meanings, Phonetics, SourceUrls } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getWordAsync } from '../../redux/actions/actions';
import styles from './Result.module.scss';
import { IApiWordRequest, IDefinition, IMeaning } from '../../interfaces';

interface IResultPage {
  isResultPage?: boolean;
}

export const Result = ({ isResultPage }: IResultPage) => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const { word } = useParams();
  const { isLoading, isError, apiData } = useAppSelector((state) => state.wordReducer);

  //srart

  const getMenaings = (apiData: IApiWordRequest[]) => {
    return apiData?.map(({ meanings }) => meanings).flat();
  };

  const meanings = getMenaings(apiData!);

  const getDefinitions = (meanings: IMeaning[]) => {
    return meanings?.map((meaning) => meaning.definitions).flat();
  };

  const definitions = getDefinitions(meanings);

  const getData = (definitions: IDefinition[]) => {
    return definitions?.reduce((acc, entity) => {
      const { definition, synonyms, antonyms } = entity;

      return { ...acc, [definition]: { synonyms, antonyms } };
    }, {});
  };

  const data = getData(definitions);
  console.log({ data });

  //end

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
              console.log(meanings);

              return (
                <div key={`${index}-${word}-base`}>
                  <div className={styles.wordBase}>
                    <h3>{word}</h3>
                    {phonetic && <p>[{phonetic}]</p>}
                  </div>
                  {/*<Phonetics phonetics={phonetics} />*/}
                  {/*<License name={license.name} url={license.url} />*/}
                  {/*{sourceUrls && <SourceUrls sourceUrls={sourceUrls} />}*/}
                  {/*{isResultPage && <Meanings meanings={meanings} />}*/}
                  {/*{meanings.map((meaning, i) => {
                    return <CollapseList title="Defintions" values={meaning.definitions as IDefinition[]} key={i} />
                    });
                  })}*/}

                  {<CollapseList title="Defintions" values={Object.keys(data)} />}
                </div>
              );
            })}
        </div>
      )}
    </main>
  );
};
