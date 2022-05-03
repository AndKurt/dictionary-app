import React from 'react';
import styles from './Phonetics.module.scss';
import { IPhonetic } from '../../interfaces';
import { AudioBtn } from '../AudioBtn/AudioBtn';

interface IPhonetics {
  phonetics: IPhonetic[];
}

export const Phonetics = ({ phonetics }: IPhonetics) => {
  return (
    <div className={styles.phoeneticContainer}>
      <h3>Phonetic:</h3>
      <ul>
        {phonetics.map((phonetic, index) => {
          return (
            <li key={`${index}-${phonetic.text}`}>
              <div className={styles.phonetics}>
                {phonetic.text && <p>[{phonetic.text}]</p>}
                {phonetic.audio && <AudioBtn audio={phonetic.audio} />}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
