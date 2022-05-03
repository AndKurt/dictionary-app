import React from 'react';
import styles from './Ticker.module.scss';

interface ITicker {
  title: string;
  words: string[];
}

export const Ticker = ({ title, words }: ITicker) => {
  const stringOfWords = words.join(', ');

  return (
    <div className={styles.ticker}>
      <h3>{title}</h3>
      <span>{stringOfWords}</span>;
    </div>
  );
};
