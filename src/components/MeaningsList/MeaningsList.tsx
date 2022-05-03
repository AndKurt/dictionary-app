import clsx from 'clsx';
import React, { useState } from 'react';
import { NestedList } from '..';
import { IMeaning } from '../../interfaces';
import { Ticker } from '../Ticker/Ticker';
import styles from './MeaningsList.module.scss';

interface IMeaningsList {
  meanings: IMeaning[];
}

enum Titles {
  MEANINGS = 'Meanings: ',
  DEFINITIONS = 'Defintions:',
  BASIC_SYNONYMS = 'Basic synonyms:',
  BASIC_ANTONYMS = 'Basic antonyms:',
  SYNONYMS = 'Synonyms',
  ANTONYMS = 'Antonyms',
}

export const MeaningsList = ({ meanings }: IMeaningsList) => {
  return (
    <div className={styles.meanings}>
      <h3>{Titles.MEANINGS}</h3>
      {meanings.map(({ partOfSpeech, definitions, synonyms, antonyms }, index) => {
        return (
          <ul key={`${index}-${partOfSpeech}`}>
            <li>
              <h6 className={styles.partOfSpeech}>{partOfSpeech}</h6>
            </li>
            {!!synonyms.length && <Ticker title={Titles.BASIC_SYNONYMS} words={synonyms} />}
            {!!antonyms.length && <Ticker title={Titles.BASIC_ANTONYMS} words={antonyms} />}
            <li>
              <h3>{Titles.DEFINITIONS}</h3>
              <ol className={styles.definitionList}>
                {definitions.map(({ definition, antonyms, synonyms }) => {
                  return (
                    <li key={definition}>
                      {definition}
                      <>
                        {!!antonyms.length && (
                          <NestedList title={Titles.ANTONYMS} words={antonyms} />
                        )}
                        {!!synonyms.length && (
                          <NestedList title={Titles.SYNONYMS} words={synonyms} />
                        )}
                      </>
                    </li>
                  );
                })}
              </ol>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
