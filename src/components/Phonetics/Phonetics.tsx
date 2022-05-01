import React from 'react';
import styles from './Phonetics.module.scss';
import { IPhonetic } from '../../interfaces';
import { AudioBtn } from '../AudioBtn/AudioBtn';

interface IPhonetics {
  phonetics: IPhonetic[];
}

export const Phonetics = (props: IPhonetics) => {
  return (
    <>
      <h5>Phonetic:</h5>
      <ul>
        {props.phonetics.map((item, index) => {
          return (
            <li key={`${index}-${item.text}`}>
              <div className={styles.phonetics}>
                {item.text && <p>[{item.text}]</p>}
                {item.audio && <AudioBtn audio={item.audio} />}
              </div>
            </li>
          );
        })}
      </ul>
    </>
    //<div className={styles.phoneticsContainer}>
    //</div>
  );
};
