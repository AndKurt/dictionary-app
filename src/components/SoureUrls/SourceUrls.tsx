import React from 'react';
import styles from './SourceUrls.module.scss';

interface ISourceUrls {
  sourceUrls: string[];
}

export const SourceUrls = (props: ISourceUrls) => {
  return (
    <>
      <h5>Source URL:</h5>
      <ul>
        {props.sourceUrls.map((item) => {
          return (
            <li key={item} className={styles.sourceUrl}>
              <a href={item}>{item}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
