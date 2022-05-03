import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './NestedList.module.scss';

interface INestedList {
  title: string;
  words: string[];
}

export const NestedList = ({ title, words }: INestedList) => {
  const [isOpenList, setIsOpenList] = useState(false);

  const toggleList = () => {
    setIsOpenList((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={toggleList}
        className={clsx(styles.titleContainer, isOpenList && styles.active)}
      >
        <h4>{title}</h4>
        <span>{isOpenList ? '-' : '+'}</span>
      </div>
      <ol className={styles.collapse}>
        {words.map((word) => (
          <li className={clsx(styles.content, isOpenList && styles.show)} key={word}>
            {word}
          </li>
        ))}
      </ol>
    </>
  );
};
