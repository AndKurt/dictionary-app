import React from 'react';
import styles from './SourceUrls.module.scss';

interface ISourceUrls {
  sourceUrls: string[];
}

export const SourceUrls = ({ sourceUrls }: ISourceUrls) => {
  return (
    <>
      <h5>Source URL:</h5>
      <ul>
        {sourceUrls.map((url) => (
          <li key={url} className={styles.sourceUrl}>
            <a href={url}>{url}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
