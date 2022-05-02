import React from 'react';
import styles from './Meanings.module.scss';
import { IMeaning } from '../../interfaces';
import { NestedList } from '../NestedList/NestedList';

interface IMeanings {
  meanings: IMeaning[];
}

enum Words {
  Synonyms = 'Synonyms',
  Antonyms = 'Antonyms',
}

export const Meanings = ({ meanings }: IMeanings) => {
  if (!meanings.length) {
    return null;
  }

  return (
    <>
      <h5>Meanings:</h5>
      {meanings.map(({ partOfSpeech, definitions, synonyms, antonyms }, index) => {
        return (
          <ul key={`${index}-${partOfSpeech}`}>
            <li>
              <h6 className={styles.partOfSpeech}>{partOfSpeech}</h6>
            </li>
            <li>
              <NestedList title={Words.Antonyms} words={antonyms} />
            </li>
            <li>
              <NestedList title={Words.Synonyms} words={synonyms} />
            </li>
            <li>
              <h6>Defintions:</h6>
              <ol className={styles.definition}>
                {definitions.map(({ definition, antonyms, synonyms }) => {
                  return (
                    <li key={definition}>
                      <>
                        {definition}
                        <NestedList title={Words.Synonyms} words={synonyms} />
                        <NestedList title={Words.Antonyms} words={antonyms} />
                      </>
                    </li>
                  );
                })}
              </ol>
              <ol className={styles.definition}></ol>
            </li>
          </ul>
        );
      })}
    </>
  );
};
